import React, { useState } from "react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import PComponent from "../PComponent";
import Columnsss from "../Column/Columnsss";
import Column from "../Column/Column";
import ProfilePic from "../ProfilePic";
import DashboardBanner from "../DashboardBanner";
import Container from "../Container";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";
import Menu from "../Menu/Menu";

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
  const [view, setView] = useState("");
  const { data, loading } = useQuery(GET_ME);
  const userData = data?.getMe || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(userData);

  return (
    <>
      <CardHeader>
        <DashboardBanner />
      </CardHeader>
      <Columnsss attr="p-2">
        <Column attr="is-2">
          <Menu />
        </Column>
        <Column attr="is-10">
          <CardContainer>
            <CardContent>
              <Columnsss attr="is-centered">
                <Column attr="is-2">
                  <ProfilePic />
                </Column>
                <Column attr="is-2">
                  <>
                    {/* Need empty element wrapping Pcomponents to prevent Column component from treating them as an array and generating new columns */}
                    <PComponent attr={"profileFont"}>
                      {placeholderData.username}
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
              <Container attr={"has-text-centered"}>
                <p className="profileSubText">
                  Here are your posts. Click one to edit it.
                </p>
              </Container>
              <Container>
                <Columnsss attr="is-multiline">
                  {placeholderData.neededChores.map((el, i) => {
                    return (i + 1) % 2 === 0 ? (
                      <div className="column is-one-third">
                        <SmallStickyNote
                          title={el.title}
                          summary={el.body}
                          key={el.id}
                        />
                      </div>
                    ) : (
                      <div className="column is-one-third">
                        <SmallGreenSticky
                          title={el.title}
                          summary={el.body}
                          key={el.id}
                        />
                      </div>
                    );
                  })}
                </Columnsss>
              </Container>
              <Container attr={"has-text-centered"}>
                <p className="profileSubText">
                  Here are chores you promised to complete. Don't let your
                  neighborino down.
                </p>
              </Container>
              <Container>
                <Columnsss attr="is-multiline">
                  {placeholderData.acceptedChores.map((el, i) => {
                    return (i + 1) % 2 === 0 ? (
                      <div className="column is-one-third">
                        <SmallGreenSticky
                          title={el.title}
                          summary={el.body}
                          key={el.id}
                        />
                      </div>
                    ) : (
                      <div className="column is-one-third">
                        <SmallStickyNote
                          title={el.title}
                          summary={el.body}
                          key={el.id}
                        />
                      </div>
                    );
                  })}
                </Columnsss>
              </Container>
            </CardContent>
<<<<<<< HEAD
=======
            
>>>>>>> main
          </CardContainer>
        </Column>
      </Columnsss>
    </>
  );
}

export default ProfileCard;
