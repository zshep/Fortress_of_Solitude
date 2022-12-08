import React from "react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import PComponent from "../PComponent";
import Columnsss from "../Column/Columnsss";
import Column from "../Column/Column";
import ProfilePic from "../ProfilePic";

function ProfileCard() {
  return (
    <CardContainer>
      <CardHeader>
        <PComponent attr="card-header-title">Users Dashboard</PComponent>
      </CardHeader>
      <CardContent>
        <Columnsss>
          <Column attr="is-one-quarter">
            <ProfilePic />
          </Column>
          <Column>
            <> 
            {/* Need empty element wrapping Pcomponents to prevent Column component from treating them as an array and generating new columns */}
              <PComponent>Username</PComponent>
              <PComponent>Community</PComponent>
              <PComponent>PP level</PComponent>
            </>
          </Column>
        </Columnsss>
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
