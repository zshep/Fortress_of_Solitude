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

function MatchingIDPost(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const postId = searchParams.get('postId')

  const retrievedTitle= 'Dog Poop!'

  const pulledText = "There are bunch of bags of dop poop all over the trail behind the neighborhood. I don't understand why people bag it, and then just leave it. Like might as well let it biodegrade right? Anyways, anyone wanna clean it?"
  console.log(postId)
  return (
    <div
      className="container box p-6
    has-background-light has-text-centered"
    >
      <MatchingPostBanner title={retrievedTitle} />
      <h1> Click on a pencil icon to edit a section</h1>

<div class="tile is-ancestor py-6">
  <div class="tile is-parent is-vertical">
    <div class="tile is-parent ">
    <div class="tile is-parent  is-2">
        <div
          class="tile is-child box has-text-centered"
          style={{ background: "#f7fff2" }}
        >
          <h1>Goblin Avatar</h1>
          <ProfilePic />
        </div>
      </div>
      <div class="tile is-parent  is-3">
        <div
          class="tile is-child box has-text-centered"
          style={{ background: "#fcfce6" }}
        >
          <h1>Creator -</h1>
          <SmallGreenSticky title={"Karen Karenson"} />
        </div>
      </div>
      <div class="tile is-parent is-3 ">
        <div
          class="tile is-child box has-text-centered"
          style={{ background: "#f7fff2" }}
        >
          <h1>Category</h1>
          <EditCategory />
          <SmallStickyNote title={"Clean Up"} />
        </div>
      </div>
      
      
      <div class="tile is-parent  is-4">
        <div
          class="tile is-child box has-text-centered"
          style={{ background: "#fcfce6" }}
        >
          <h1>Time Posted</h1>
          <SmallGreenSticky title={"01/19/2022 11:45 PM"} />
        </div>
      </div>
    </div>
    <div
      class="tile box is-12 has-text-centered"
      style={{ background: "#e3e3e3" }}
    >
            <h1>
              {pulledText}
            </h1>
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
