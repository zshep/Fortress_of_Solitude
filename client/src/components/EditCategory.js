import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function EditCategory({ postId }) {
  const [isActive, setState] = useState(false);
  //const [EditCategory, { error }] = useMutation(EDIT_JOB);
  const handleClick = () => {
    setState(!isActive);
  };



  const changeCategory = async () => {
    const jobData = {
      _id: postId,
      // category: category,
    };
    try {
      console.log(jobData);
      // const { data } = await EditCategory({
      //   variables: { jobData },
      // });
      // if (!data) {
      //   throw new Error("No data returned");
      // }
    } catch (error) {
      throw new Error("Failed to change the title.");
    }
  };

  const active = isActive ? "is-active" : "";
  return (
    
    <div className="App">
    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={handleClick}/>

    <div className={`modal ${active}`}>
        <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Choose a New Category</p>
                    <button className="delete" aria-label="close" onClick={handleClick}></button>
                </header>
                <section className="modal-card-body">
                    <div className="field">
                        <div className="control">
                            <div className="select">
                                <select>
                                <option>Yardwork</option>
                                <option>Automotive</option>
                                <option>Petcare</option>
                                <option>Home Maintenance</option>
                                <option>Housekeeping</option>
                                <option>Cooking</option>
                                <option>Technology</option>
                                <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
            <footer className="modal-card-foot">
                <button className="button is-success" onClick={handleClick} >Save changes</button>
                <button className="button" onClick={handleClick}>Cancel</button>
            </footer>
        </div>
    </div>
    
  </div>
  );
}

export default EditCategory;
