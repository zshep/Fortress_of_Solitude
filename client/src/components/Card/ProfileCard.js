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
  username: "Jacob",
  community: "Auburn Acres",
  PP: 69420,
  email: "test@test.com",
  neededChores: [
    {
      id: 23,
      title: "Clean my gutters",
      body: "Need help cleaning goblins out of my gutters.",
    },
    {
      id: 24,
      title: "unclog toilet",
      body: "My father clogged up his toilet again, I need someone who knows how to snake a toilet to help me out.",
    },
  ],
  acceptedChores: [
    {
      id: 978,
      title: "Mow Betty's lawn",
      body: "My grandma Betty broker her hip and the lawn is terribly overgrown. Can someone come mow her lawn please?",
      author: "Stacy Smith",
    },
    {
      id: 77,
      title: "Dog sitting",
      body: "We are going to be out of town for the weekend, can someone watch my dog please?",
      auther: "Ligma Johnson",
    },
  ],
};

function ProfileCard() {
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.getMe || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  console.log(data)
  return (
    <>
      <CardHeader>
        <DashboardBanner />
      </CardHeader>
      <DashProvider>
        <Columnsss attr="p-2">
          <Column attr="is-2-desktop is-full-mobile">
            <Menu />
          </Column>
          <Column attr="is-10-tablet is-12-mobile">
            <CardContainer>
              <CardContent>
                <Columnsss attr="is-centered is-mobile">
                  <Column attr="is-2-desktop">
                    <ProfilePic />
                  </Column>
                  <Column attr="is-2-desktop">
                    <>
                      {/* Need empty element wrapping Pcomponents to prevent Column component from treating them as an array and generating new columns */}
                      <PComponent attr={"profileFont"}>
                        {userData.username}
                      </PComponent>
                      <PComponent attr={"profileFont"}>
                        {placeholderData.community}
                      </PComponent>
                      <PComponent attr={"profileFont"}>
                        {placeholderData.PP}
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
