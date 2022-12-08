import React from "react";
import ProfilePic from "./ProfilePic";

function ProfileBox() {
  const data = {
    username: "Jacob",
    email: "test@test.com",
    neededChores: [
      {
        id: 23,
        title: "Clean my gutters",
        body: "Need help cleaning goblins out of my gutters.",
      },
      {
        id: 24,
        title: "unclog toilet",
        body: "My father clogged up his toilet again, I need someone who knows how to snake a toilet to help me out.",
      },
    ],
    acceptedChores: [
      {
        id: 978,
        title: "Mow Betty's lawn",
        body: "My grandma Betty broker her hip and the lawn is terribly overgrown. Can someone come mow her lawn please?",
        author: "Stacy Smith"
      },
      {
        id: 77,
        title: "Dog sitting",
        body: "We are going to be out of town for the weekend, can someone watch my dog please?",
        auther: "Ligma Johnson"
      }
    ]
  };
  return (
    <div className="container">
      <header className="card-header">
        <p className="card-header-title">User's Profile Page</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="columns">
          <div className="column is-one-quarter">
            <ProfilePic />
          </div>
          <div className="column">
            <p> Username </p>
            <p> Community Name</p>
            <p> PP Level</p>
          </div>
        </div>
        <div className="content">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      <footer className="card-footer">
        <a href="/board" className="card-footer-item">
          See All Posts
        </a>
      
        {/* We need to change this second one to render posts by user once back end is set up */}
      </footer>
    </div>
  );
}

export default ProfileBox;
