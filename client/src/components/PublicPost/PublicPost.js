import React from "react";
import { useParams } from "react-router-dom";
import PostBanner from "../Banners/PostBanner.js";
import ProfilePic from "../Profile/ProfilePic";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";

import { useQuery, useMutation } from "@apollo/client";
import { GET_SINGLE_POST } from "../../utils/queries";
import { ACCEPT_JOB, COMPLETE_JOB } from "../../utils/mutations";

function PublicPost() {

  const { postId } = useParams()

  const { data, loading } = useQuery(GET_SINGLE_POST, {
    variables: { id: postId },
  });
  const [acceptJob] = useMutation(ACCEPT_JOB)
  const [finishJob] = useMutation(COMPLETE_JOB)

  const postData = data?.post || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const claimJob = async(event) => {
    event.preventDefault();
    const jobData = {
      postId
    }
    try {
      const { data } = await acceptJob({
        variables: { jobData }
      })
      if (!data) {
        throw new Error("No data returned");
      }

    } catch (error) {
      throw new Error(error)
    }
  }

  const completeJob = async(event) => {
    event.preventDefault()
    const jobData = {
      postId
    }
    try {
      const { data } = await finishJob({
        variables: { jobData }
      })
      if (!data) {
        throw new Error("No data returned");
      }

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <div
      class="container p-6"
    >
      <PostBanner title={postData.postTitle} />

      <div class="tile is-ancestor py-6">
      <div class="tile is-parent is-vertical">
        <div class="tile is-parent ">
          <div class="tile is-parent  is-4">
            <div class="tile is-child is-transparent has-text-centered" >
              <h1 className="has-text-white">Goblin Avatar</h1>
              <ProfilePic />
            </div>
          </div>
        <div class="tile is-parent  is-3">
        <div class="tile is-child is-transparent has-text-centered">
          <h1 className="has-text-white">Creator -</h1>
          <SmallGreenSticky title={postData.postUser} />
          </div>
        </div>
      <div class="tile is-parent is-3 ">
        <div class="tile is-child is-transparent has-text-centered">
          <h1 className="has-text-white">Category</h1>
          <SmallStickyNote title={postData.postCategory} />
      </div>
    </div>  
    <div class="tile is-parent  is-2">
      <div class="tile is-child is-transparent has-text-centered">
        <h1 className="has-text-white">Time Posted</h1>
        <SmallGreenSticky title={postData.createdAt} />
      </div>
      </div>
      </div>
        <div class="container box"
            style={{ background: "#d7ebce" }}>
          <h1>{postData.postText}</h1>
        </div>
        <div class="container box"
            style={{ background: "#d7ebce" }}>
          <h1> Post Status: {postData.postStatus}</h1>
          
          {postData.postStatus === "assigned" &&  
            <h1>Claimed By: {postData.choreGoblin}</h1>
            }
            
          
        </div>
      </div>
    </div>

      <div class="container has-text-centered">
        <button
          class="button m-4"
          onClick={claimJob}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.25)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          style={{ fontFamily: "Permanent Marker", background: "#ffa" }}
        >
          Claim Job
        </button>
        <button
          class="button m-4"
          onClick={completeJob}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.25)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          style={{ fontFamily: "Permanent Marker", background: "#A6CE90" }}
        >
          Complete Job
        </button>
      </div>
    </div>
  );
}

export default PublicPost;
