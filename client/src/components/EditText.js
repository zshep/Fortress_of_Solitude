import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EDIT_JOB } from "../utils/mutations";

function EditText({ job }) {
  const { _id, postText } = job;
  const [isActive, setState] = useState(false);
  const [newText, setText] = useState(postText);
  const [editText, { error }] = useMutation(EDIT_JOB);

  const handleClick = () => {
    setState(!isActive);
  };

  function handleChange(event) {
    setText(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClick();
    const jobData = {
      postId: _id,
      postText: newText,
    };
    try {
      console.log(jobData);
      const { data } = await editText({
        variables: { jobData },
      });
      if (!data) {
        throw new Error("No data returned");
      }
    } catch (error) {
      throw new Error("Failed to change the title.");
    }
  };

  const active = isActive ? "is-active" : "";
  return (
    <div className="App">
      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={handleClick} />

      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Text</p>
            <button
              onClick={handleClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <div className="control">
                <input
                  className="textarea"
                  type="text"
                  value={newText}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={handleSubmit} className="button is-success">
              Save changes
            </button>
            <button onClick={handleClick} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default EditText;
