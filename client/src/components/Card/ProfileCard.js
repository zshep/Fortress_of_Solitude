import React, { useState } from "react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import PComponent from "../PComponent";
import Columnsss from "../Column/Columnsss";
import Column from "../Column/Column";
import ProfilePic from "../ProfilePic";
import DashboardBanner from "../Dashboard/DashboardBanner";
import Menu from "../Menu/Menu";
import JobContainer from "../Dashboard/JobContainer";

import { DashProvider } from "../../utils/context/dashboardContext";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";

const placeholderData = {
  community: "Auburn Acres",
};

function ProfileCard(props) {
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.getMe || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const passedNameValue = 'Username: ';
  const passedCommunityName= 'Community: ';
  const passedPatriotPoints= 'Patriot Points: ';

  return (
    <>
      <CardHeader>
        <DashboardBanner />
      </CardHeader>
      <h1 className="boardSubText">Below is information about your profile. Click on a tab on the left to navigate!</h1>
      <DashProvider>
        <Columnsss attr="p-2">
          <Column attr="is-2-desktop is-full-mobile">
            <Menu />
          </Column>
          <Column attr="is-10-tablet is-12-mobile">
            <CardContainer>
              <CardContent>
                <Columnsss attr="is-centered is-vcentered is-mobile">
                  <Column attr="is-2-desktop has-text-centered">
                    <ProfilePic />
                  </Column>
                  <Column attr="is-4-desktop">
                    <>
                      {/* Need empty element wrapping Pcomponents to prevent Column component from treating them as an array and generating new columns */}
                      <PComponent attr={"profileFont"} title={passedNameValue} value={userData.username}>
                        
                      </PComponent>
                      <PComponent attr={"profileFont"} title={passedCommunityName} value={placeholderData.community}>
                
                      </PComponent>
                      <PComponent attr={"profileFont"} title={passedPatriotPoints} value={userData.ppLevel}>
                        
                      </PComponent>
                    </>
                  </Column>
                </Columnsss>
                <JobContainer data={userData}/>
              </CardContent>
            </CardContainer>
          </Column>
        </Columnsss>
      </DashProvider>
    </>
  );
}

export default ProfileCard;
