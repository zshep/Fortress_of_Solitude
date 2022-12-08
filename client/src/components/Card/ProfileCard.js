import React from "react";
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

const data = [
  {
    id: 1123,
    title: "Looking for goblin hunters",
    author: "Shep",
    body: "Need help hunting goblins",
  },
  {
    id: 1133,
    title: "useState Tutoring",
    author: "Jacob",
    body: "I don't understand Redux",
  },
  {
    id: 113,
    title: "Gutter Cleaning",
    author: "Patrick",
    body: "Looking for someone to help me clean out my gutters",
  },
];

function ProfileCard() {
  return (
    <CardContainer>
      <CardHeader>
        <DashboardBanner/>
      </CardHeader>
      <CardContent>
        <Columnsss>
          <Column attr="is-one-half">
            <ProfilePic />
          </Column>
          <Column>
            <> 
            {/* Need empty element wrapping Pcomponents to prevent Column component from treating them as an array and generating new columns */}
              <PComponent attr={"profileFont"}>Username</PComponent>
              <PComponent attr={"profileFont"}>Community</PComponent>
              <PComponent attr={"profileFont"}>PP level</PComponent>
            </>
          </Column>
        </Columnsss>
        <Container attr={"has-text-centered"}>
          <p className="profileSubText">Here are your posts. Click one to edit it.</p>
        </Container>
        <Container>
        <Columnsss attr='is-multiline'>
      {data.map((el, i) => {
        return (i + 1) % 2 === 0 ? (
          <div className="column is-one-third">
            <SmallStickyNote title={el.title} summary={el.body} key={el.id} />
          </div>
        ) : (
          <div className="column is-one-third">
            <SmallGreenSticky title={el.title} summary={el.body} key={el.id} />
          </div>
        );
      })}
    </Columnsss>
        </Container>
      </CardContent>
      <CardFooter>
        <a href="/board" className="card-footer-item">
          See All Posts
        </a>
      </CardFooter>
    </CardContainer>
  );
}

export default ProfileCard;
