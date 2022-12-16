import React from "react";
import { useParams } from "react-router-dom";
import PostBanner from "../Banners/PostBanner.js";
import ProfilePic from "../Profile/ProfilePic";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";
import ClaimJob from "../Buttons/ClaimJob.js";
import CompleteJob from "../Buttons/CompleteJob.js";
import GoblinState from "../../utils/localStorage.js";
import ErrorModal from "../Modals/ErrorModal"

import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../../utils/queries";

function PublicPost() {
  const { postId } = useParams();

  const { data, loading } = useQuery(GET_SINGLE_POST, {
    variables: { id: postId },
  });
 
  const loggedInGoblin = new GoblinState().getLoginState();

  const postData = data?.post || {};

  const date = new Date(postData.createdAt * 1)
  const pacificTime = date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})


  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div class="container p-6">
      <PostBanner title={postData.postTitle} />

      <div class="tile is-ancestor py-6">
        <div class="tile is-parent is-vertical">
          <div class="tile is-parent ">
            <div class="tile is-parent  is-4">
              <div class="tile is-child is-transparent has-text-centered">
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
                <SmallGreenSticky title={pacificTime} />
              </div>
            </div>
          </div>
          <div class="container box" style={{ background: "#d7ebce" }}>
            <h1>{postData.postText}</h1>
          </div>
          <div class="container box" style={{ background: "#d7ebce" }}>
            <h1> Post Status: {postData.postStatus}</h1>

            {postData.postStatus === "assigned" && (
              <h1>Claimed By: {postData.choreGoblin}</h1>
            )}
          </div>
        </div>
      </div>

      <div class="container has-text-centered">
        {loggedInGoblin !== null && (
          <>
            <ClaimJob postId={postId}/>
            <CompleteJob postId={postId}/>
          </>
        )}
      </div>
    </div>
  );
}

export default PublicPost;
