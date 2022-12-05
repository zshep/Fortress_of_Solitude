import React from "react";

// Hero element is fun for making a bold statement. I like to use as headers, but can be used any number of ways.
// By modifying the attr to things like "is-small" or "is-halfheight" you can change the use.
// https://bulma.io/documentation/layout/hero/#fullheight-hero

function Hero({ children, attr }) {
  return attr === undefined ? (
    <div className={`hero`}>
      <div className="hero-body">{children}</div>
    </div>
  ) : (
    <div className={`hero ${attr}`}>
      <div className="hero-body">{children}</div>
    </div>
  );
}

export default Hero;
