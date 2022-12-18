import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_JOB } from "../../utils/mutations";
import { GET_CATS_AND_LOGGEDIN_USER } from "../../utils/queries";
import Auth from "../../utils/auth";
import GoblinState from "../../utils/localStorage";
import ErrorModal from "../Modals/ErrorModal"
import Loader from "../Loader";

function CreatePost() {
  const { loading, data } = useQuery(GET_CATS_AND_LOGGEDIN_USER, {
    variables: { _id: Auth.getProfile().data._id },
  });
  const [createJob, { error }] = useMutation(CREATE_JOB);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");

  if (error) {
    return (
      <>
        <ErrorModal message={error.message} activate={true} />
      </>
    );
  }

  if (loading) return;

  // un comment when no longer returning null
  const userName = data?.user.username;
  const activeGoblin = new GoblinState().getLoginState().id;

  //console.log(activeGoblin)

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
      const error = new Error(
        "You need to be logged in to save a job. How did you get here?"
      );
      return (
        <>
          <ErrorModal message={error.message} activate={true} />
        </>
      );
    }

    if (category === "pick a category my dude") {
      const error = new Error("that's not a category my dude");
      return (
        <>
          <ErrorModal message={error.message} activate={true} />
        </>
      );
    }

    const jobData = {
      postCategory: category,
      postTitle: title,
      postText: summary,
      postUser: userName,
      postStatus: "AVAILABLE",
      userId: activeGoblin,
    };

    try {
      const { data } = await createJob({
        variables: { jobData: jobData },
      });
      if (!data) {
        const error = new Error("No data returned!")
        return (
          <>
            <ErrorModal message={error.message} activate={true} />
          </>
        );
      }
      window.location.replace("/profile");
    } catch (error) {
      return (
        <>
          <ErrorModal message={error.message} activate={true} />
        </>
      );
    }
  };

  if (loading) {
    return <Loader/>;
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
      <h2
        className="subtitle has-text-centered"
        style={{ fontFamily: "Permanent Marker" }}
      >
        Create a Volunteer Opportunity
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
                <option>pick a category my dude</option>
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
