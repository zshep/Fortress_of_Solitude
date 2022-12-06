import React from "react";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
const image = require("../wood.png");

// example of built out card using individual components. Can be mixed/matched to restructure cards.
// https://bulma.io/documentation/components/card/

function Card({ children }) {
  return (
    <CardContainer>
      <CardHeader>Card Header</CardHeader>
      <CardImage figureAttr={"image is-256x256"} src={image} alt={"it's wood."} />
      <CardContent attr={"has-text-centered"}>Here is some content for you</CardContent>
      <CardFooter>The footer!</CardFooter>
    </CardContainer>
  );
}

export default Card;
