import React, { useState } from "react";
import { Modal } from "react-bulma-components";

function DeleteModal() {
  const [isActive, setState] = useState(false);
  const handleClick = () => {
    setState(!isActive);
  };
  const active = isActive ? "is-active" : "";
  return (
    <div>
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              Are you sure you want to delete this post?
            </p>
            <button
              onClick={handleClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <footer className="modal-card-foot">
            <button className="button is-danger">Delete Post</button>
            <button onClick={handleClick} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="button m-4"
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.25)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
        }}
        style={{ fontFamily: "Permanent Marker", background: "#ad5050" }}
      >
        Delete Job
      </button>
    </div>
  );
}

export default DeleteModal;
