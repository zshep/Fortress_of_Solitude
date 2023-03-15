import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EDIT_JOB } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const PostBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
  color: black;
  background-color: #d7ebce;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: "Permanent Marker", cursive;
`;

function MatchingPostBanner({ job }) {
  const [isActive, setState] = useState(false);
  const [newTitle, setTitle] = useState(job.postTitle);
  const [editTitle, { error }] = useMutation(EDIT_JOB);
  const active = isActive ? "is-active" : "";
  
  const handleClick = (event) => {
    event.preventDefault();
    setState(!isActive);
  };

  async function handleSubmit(event) {
    setState(!isActive);
    try {
      const jobData = {
        postTitle: newTitle,
        postId: job._id,
      };
      await editTitle({
        variables: { jobData },
      });

      if (error) {
        throw new Error(error);
      }
      window.location.reload()
    } catch (error) {
      throw new Error("Failed to save changes.");
    }
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <PostBannerWrapper>
        Volunteer Opportunity - {newTitle} -
        <div className="App">
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            onClick={handleClick}
          />

          <div className={`modal ${active}`}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Enter new post title</p>
                <button
                  onClick={handleClick}
                  className="delete"
                  aria-label="close"
                />
              </header>
              <form>
                <section className="modal-card-body">
                  <div className="field">
                    <div className="control">
                      <input
                        name="newTitleName"
                        className="input"
                        type="text"
                        placeholder="e.g New Title"
                        value={newTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </section>
                <footer className="modal-card-foot">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="button is-success"
                  >
                    Save changes
                  </button>
                  <button onClick={handleClick} className="button">
                    Cancel
                  </button>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </PostBannerWrapper>
    </>
  );
}

export default MatchingPostBanner;
