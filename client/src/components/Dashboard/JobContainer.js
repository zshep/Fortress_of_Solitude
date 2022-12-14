import React from "react";
import AcceptedChoreCard from "../Card/AcceptedChoreCard";
import NeededChoreCard from "../Card/NeededChoreCard";
import { useDashContext } from "../../utils/context/dashboardContext";

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

function JobContainer({ data }) {
    const [dashState] = useDashContext()
    switch(dashState) {
        case "needed":
            return <NeededChoreCard data={data}/>
        case "accepted":
            return <AcceptedChoreCard data={data}/>
          default: 
            <p>Default return what?</p>
            //What do we want to default return?
    }
}

export default JobContainer