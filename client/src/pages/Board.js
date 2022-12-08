import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../utils/queries";
import Columnsss from "../components/Column/Columnsss";
import StickyNote from "../components/StickyNotes/StickyNote";
import GreenSticky from "../components/StickyNotes/GreenSticky";

function Board() {

  // const { postData, loading } = useQuery(GET_POSTS)

  // VV== Placeholder data until queries are linked up ==VV
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
    {
      id: 1124,
      title: "Junk Removal",
      author: "Shadin",
      body: "Looking for some hunks to take out all my junk in my garage",
    },
    {
      id: 123,
      title: "Lawn Care Maintenance",
      author: "Tony",
      body: "Looking for someone to help take care of my lawn while I'm out of town for a couple weeks",
    },
  ];
  return (
    <Columnsss attr='is-multiline'>
      {data.map((el, i) => {
        return (i + 1) % 2 === 0 ? (
          <div className="column is-one-third">
            <StickyNote title={el.title} summary={el.body} key={el.id} />
          </div>
        ) : (
          <div className="column is-one-third">
            <GreenSticky title={el.title} summary={el.body} key={el.id} />
          </div>
        );
      })}
    </Columnsss>
  );
}

export default Board;
