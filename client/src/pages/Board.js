import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../utils/queries";
import Columnsss from "../components/Column/Columnsss";
import StickyNote from "../components/StickyNotes/StickyNote";
import GreenSticky from "../components/StickyNotes/GreenSticky";
import VolunteerBanner from "../components/Banners/VolunteerBanner.js";
import Loader from "../components/Loader"
function Board() {

  const { data, loading } = useQuery(GET_POSTS)
  const posts = data?.posts || {};

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
    <VolunteerBanner />
    <h1 className="boardSubText">Click on a post-it for more details</h1>
    <Columnsss attr='is-multiline'>
      {posts.map((el, i) => {
        return (i + 1) % 2 === 0 ? (
          <div className="column is-one-third">
            <Link to={`/post/${el._id}`} key={i}>
              <StickyNote title={el.postTitle} summary={el.postText} key={el._id} />
            </Link>
          </div>
        ) : (
          <div className="column is-one-third">
            <Link to={`/post/${el._id}`} key={i}>
              <GreenSticky title={el.postTitle} summary={el.postText} key={el._id} />
            </Link>
          </div>
        );
      })}
    </Columnsss>
    </>
  );
}

export default Board;
