import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Columnsss from "../Column/Columnsss";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";

function NeededChoreCard({ data }) {
  return (
    <>
      <Container attr={"has-text-centered"}>
        <p className="profileSubText">
          Here are your posts. Click one to edit it.
        </p>
      </Container>
      <Container>
        <Columnsss attr="is-multiline">
          {data.posts.map((el, i) => {
            return (i + 1) % 2 === 0 ? (
              <div className="column is-one-third" key={el._id} postid={el._id}>
                <Link to={`/post/${el._id}`}>
                  <SmallStickyNote title={el.postTitle} summary={el.postText} />
                </Link>
              </div>
            ) : (
              <div className="column is-one-third" key={el._id} postid={el._id}>
                <Link to={`/post/${el._id}`}>
                  <SmallGreenSticky
                    title={el.postTitle}
                    summary={el.postText}
                  />
                </Link>
              </div>
            );
          })}
        </Columnsss>
      </Container>
    </>
  );
}

export default NeededChoreCard;
