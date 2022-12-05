import React from "react";

// Simple section divider, place content for the section in as the children.
// https://bulma.io/documentation/layout/section/

function Section({ children, attr }) {
  return attr === undefined ? (
    <section className={`section`}>{children}</section>
  ) : (
    <section className={`section ${attr}`}>{children}</section>
  );
}

export default Section;
