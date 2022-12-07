import React from 'react'
import ProfilePic from './ProfilePic'

function ProfileBox() {
  return (
    
    <div className="container">
  <header className="card-header">
    <p className="card-header-title">
      User's Profile Page
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="columns">
    <div className="column is-one-quarter">
  <ProfilePic/>
  </div>
  <div className="column">
  <p> Username </p>
  <p> Community Name</p>
  <p> PP Level</p>
  </div>
  </div>
    <div className="content">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
  </div>
  <footer className="card-footer">
    <a href="/board" className="card-footer-item">See All Posts</a>
    <a href="/board" className="card-footer-item">My Posts</a>
    {/* We need to change this second one to render posts by user once back end is set up */}
  </footer>
</div>
  )
}

export default ProfileBox
