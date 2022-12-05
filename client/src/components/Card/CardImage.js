import React from "react";

function CardImage({ attr, figureAttr, src, alt }) {
  return attr === undefined ? (
    <div className={`card-image`}>
      <figure class={figureAttr}>
        <img
          src={src}
          alt={alt}
        />
      </figure>
    </div>
  ) : (
    <div className={`card-image ${attr}`}>
      <figure class={figureAttr}>
        <img
          src={src}
          alt={alt}
        />
      </figure>
    </div>
  );
}

export default CardImage;
