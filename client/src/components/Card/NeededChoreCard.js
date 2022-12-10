import React from "react";
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
              <div className="column is-one-third" key={el._id} postId={el._id}>
                <SmallStickyNote
                  title={el.postTitle}
                  summary={el.postText}
                />
              </div>
            ) : (
              <div className="column is-one-third" key={el._id} postId={el._id}>
                <SmallGreenSticky
                  title={el.postTitle}
                  summary={el.postText}
                  key={el._id}
                />
              </div>
            );
          })}
        </Columnsss>
      </Container>
    </>
  );
}

export default NeededChoreCard;
