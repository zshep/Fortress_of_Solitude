import React from "react";
import Container from "../Container";
import Columnsss from "../Column/Columnsss";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";

function AcceptedChoreCard({ data }) {
  return (
    <>
      <Container attr={"has-text-centered"}>
        <p className="profileSubText">
          Here are chores you promised to complete. Don't let your neighborino
          down.
        </p>
      </Container>
      <Container>
        <Columnsss attr="is-multiline">
          {data.acceptedChores.map((el, i) => {
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
    </>
  );
}

export default AcceptedChoreCard;
