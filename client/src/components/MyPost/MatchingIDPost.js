import React from "react";
import { useParams } from "react-router-dom";
import DeleteModal from "./DeleteModal.js";
import EditCategory from "./EditCategory";
import EditText from "./EditText";
import ProfilePic from "../Profile/ProfilePic";
import SmallGreenSticky from "../StickyNotes/SmallGreenSticky";
import SmallStickyNote from "../StickyNotes/SmallStickyNote";
import MatchingPostBanner from "../Banners/MatchingPostBanner";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../../utils/queries";

function MatchingIDPost(props) {
 
  const { postId } = useParams()

  const { data, loading } = useQuery(GET_SINGLE_POST, {
    variables: { id: postId },
  });

  const postData = data?.post || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="container p-6 has-text-centered">
      <MatchingPostBanner job={postData} />
      <h1 className="has-text-white">
        {" "}
        Click on a pencil icon to edit a section
      </h1>
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
                <EditCategory job={postData}/>
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
          <div
            class="container box"
            style={{ background: "#d7ebce" }}
          >
            <h1>{postData.postText}</h1>
            <EditText job={postData} />
          </div>
        </div>
      </div>
      <div className="container has-text-centered">
        <DeleteModal postId={postId} />
      </div>
    </div>
  );
}

export default MatchingIDPost;
