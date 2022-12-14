import React from "react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import PComponent from "../Profile/PComponent";
import Columnsss from "../Column/Columnsss";
import Column from "../Column/Column";
import ProfilePic from "../Profile/ProfilePic";
import DashboardBanner from "../Dashboard/DashboardBanner";
import Menu from "../Menu/Menu";
import JobContainer from "../Dashboard/JobContainer";
import GoblinState from "../../utils/localStorage";

import { DashProvider } from "../../utils/context/dashboardContext";
import { useLoginContext } from "../../utils/context/loginContext";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { LOGIN_USER } from "../../utils/actions";

const placeholderData = {
  community: "Auburn Acres",
};

function ProfileCard(props) {
  const [loginState, dispatch] = useLoginContext()
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.getMe || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  dispatch({
    type: LOGIN_USER,
    payload: userData
  })

  // saves user id and name to localstorage for grabbing later.
  const saveGoblin = {
    id: loginState._id,
    username: loginState.username
  }
  const testGoblin = new GoblinState(saveGoblin)
  testGoblin.setLoginState()

  const passedNameValue = 'Username: ';
  const passedCommunityName= 'Community: ';
  const passedPatriotPoints= 'Patriot Points: ';

  return (
    <>
      <CardHeader>
        <DashboardBanner />
      </CardHeader>
      <h1 className="boardSubText has-text-white">Below is information about your profile. Click on a tab on the left to navigate!</h1>
      <DashProvider>
        <Columnsss attr="p-2">
          <Column attr="is-2-desktop is-full-mobile">
            <Menu />
          </Column>
          <Column attr="container is-5">
            <CardContainer>
              <CardContent>
                <Columnsss attr="is-centered is-vcentered is-mobile">
                  <Column attr="has-text-centered">
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
                
              </CardContent>
              
            </CardContainer>
            <JobContainer data={userData}/>
          </Column>
          
        </Columnsss>
      </DashProvider>
    </>
  );
}

export default ProfileCard;
