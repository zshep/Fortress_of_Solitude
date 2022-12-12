import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import EditCategory from "./EditCategory";
import EditText from "./EditText";
import EditTitle from "./EditTitle";
import ProfilePic from "./ProfilePic";
import SmallGreenSticky from "./StickyNotes/SmallGreenSticky";
import SmallStickyNote from "./StickyNotes/SmallStickyNote";
import MatchingPostBanner from "./MatchingPostBanner";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../utils/queries"; 

function MatchingIDPost(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const postId = searchParams.get('postId')

  const { data, loading } = useQuery(GET_SINGLE_POST, {
    variables: { id: postId }
  })

  const postData = data?.post || {}

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(postData)


  const pulledText = "There are bunch of bags of dop poop all over the trail behind the neighborhood. I don't understand why people bag it, and then just leave it. Like might as well let it biodegrade right? Anyways, anyone wanna clean it?"
  console.log(postId)
  return (
    <div className="container p-6 has-text-centered">
      <MatchingPostBanner title={postData.postTitle} />
      <h1 className="has-text-white"> Click on a pencil icon to edit a section</h1>
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
          <EditCategory />
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
        <div class="tile box is-12 has-text-centered" style={{ background: "#e3e3e3" }}>
          <h1>{postData.postText}</h1>
          <EditText editedText={pulledText}/>
        </div>
      </div>
    </div>
        <div className="container has-text-centered">
          <DeleteModal postId={postId}/>
        </div>
    </div>
  );
}

export default MatchingIDPost;
