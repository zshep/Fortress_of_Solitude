import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_JOB } from "../utils/mutations";
import { GET_CATEGORIES, GET_SINGLE_USERNAME, GET_CATS_AND_LOGGEDIN_USER } from "../utils/queries";
import Auth from "../utils/auth";

function CreatePost() {
  const { loading, data } = useQuery(
    GET_CATS_AND_LOGGEDIN_USER,
    {
      variables: { _id: Auth.getProfile().data._id },
    }
  );
  const [createJob, { error }] = useMutation(CREATE_JOB);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");

  if (loading) return

  // un comment when no longer returning null
  // const userName = data?.user.username

  // console.log(userName)

  const changeState = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case "title":
        setTitle(inputValue);
        break;
      case "category":
        setCategory(inputValue);
        break;
      default:
        setSummary(inputValue);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      throw new Error(
        "You need to be logged in to save a job. How did you get here?"
      );
    }

    const jobData = {
      category,
      title,
      summary,
      // user: userName
    };

    try {
      // console.log(jobData);
      // const { data } = await createJob({
      //   variables: { jobData },
      // });
      // if (!data) {
      //   throw new Error("No data returned");
      // }
    } catch (error) {
      throw new Error("Failed to save job.");
    }
  };

  if (loading) {
    return;
  }

  const categoryData =
    data?.categories.map((el) => {
      return el.category;
    }) || {};

  return (
    <div
      className="container box p-6
                has-background-light"
    >
      <h2 className="subtitle has-text-centered">
        Volunteer Opportunity #xxxxxx
      </h2>
      <form action="">
        <div className="field">
          <label className="label">Title of Your Post</label>
          <div className="control">
            <input
              className="input"
              name="title"
              type="text"
              placeholder="'Litter at the park' etc.."
              onChange={changeState}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">What Category of work is this?</label>
          <div
            className="control has-icons-left
                      has-icons-right"
          >
            <div className="select">
              <select onChange={changeState} name="category">
                {categoryData.map((el) => {
                  return <option>{el}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Volunteer Opportunity Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="How can someone help?"
              onChange={changeState}
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button"
              onClick={handleSubmit}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.25)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              style={{ fontFamily: "Permanent Marker", background: "#A6CE90" }}
            >
              Create Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
