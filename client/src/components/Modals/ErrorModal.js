import React, { useState } from "react";
import { parseError } from "../../utils/helpers";

function ErrorModal({ message, activate }) {
  const [isActive, setActive] = useState(activate);
  const errorMessage = parseError(message)
  console.log(message)
  const handleClick = () => {
    setActive(!isActive);
  };
  const active = isActive ? "is-active" : "";
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-link-light p-4">
        <p className="is-size-5 has-text-centered">{errorMessage}</p>
        <button
        className="button is-normal is-danger"
        aria-label="close"
        onClick={() => {
          handleClick();
          window.location.reload();
        }}
      >Close</button>
      </div>
      <button
        className="modal-close is-large is-danger"
        aria-label="close"
        onClick={() => {
          handleClick();
          window.location.reload();
        }}
      ></button>
    </div>
  );
}

export default ErrorModal;
