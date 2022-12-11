import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../utils/queries";
import Columnsss from "../components/Column/Columnsss";
import StickyNote from "../components/StickyNotes/StickyNote";
import GreenSticky from "../components/StickyNotes/GreenSticky";
import VolunteerBanner from "../components/VolunteerBanner";

function Board() {

  const { data, loading } = useQuery(GET_POSTS)
  const posts = data?.posts || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <VolunteerBanner />
    <h1 className="boardSubText">Click on a post-it for more details</h1>
    <Columnsss attr='is-multiline'>
      {posts.map((el, i) => {
        return (i + 1) % 2 === 0 ? (
          <div className="column is-one-third">
            <a href={`/mypost/?postId=${el._id}`}>
              <StickyNote title={el.postTitle} summary={el.postText} key={el._id} />
            </a>
          </div>
        ) : (
          <div className="column is-one-third">
            <a href={`/mypost/?postId=${el._id}`}>
              <GreenSticky title={el.postTitle} summary={el.postText} key={el._id} />
            </a>
          </div>
        );
      })}
    </Columnsss>
    </>
  );
}

export default Board;
