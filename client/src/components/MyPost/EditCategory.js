import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_CATEGORIES } from "../../utils/queries";
import { EDIT_JOB } from "../../utils/mutations";

function EditCategory({ job }) {
  const { postCategory, _id } = job;
  const [isActive, setState] = useState(false);
  const [newCategory, setCategory] = useState(postCategory);
  const { data, loading } = useQuery(GET_CATEGORIES);
  const [editCategory] = useMutation(EDIT_JOB);

  if (loading) {
    return
  }

  const categoryData = data?.categories || {};

  const handleClick = () => {
    setState(!isActive);
  };

  const changeCategory = async (event) => {
    setCategory(event.target.value);
  };
  

  const handleSubmit = async () => {
    handleClick()
     const jobData = {
        postId: _id,
        postCategory: newCategory
      };
      try {
        const { data } = await editCategory({
          variables: { jobData },
        });
        if (!data) {
          throw new Error("No data returned");
        }
        window.location.reload()
      } catch (error) {
        throw new Error("Failed to change the category.");
      }
  };

  const active = isActive ? "is-active" : "";
  return (
    <div className="App">
      <FontAwesomeIcon
        icon="fa-solid fa-pen-to-square"
        style={{ color: "white" }}
        onClick={handleClick}
      />

      <div className={`modal ${active}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Choose a New Category</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleClick}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select onChange={changeCategory}>
                    {categoryData.map((el) => {
                      return <option value={el.category}>{el.category}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleSubmit}>
              Save changes
            </button>
            <button className="button" onClick={handleClick}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
