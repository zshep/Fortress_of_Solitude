import React from 'react'
import ProfilePic from './ProfilePic'

function ProfileBox() {
  return (
    
    <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      Profile Page PLACEHOLDER JACOB. PLACEHOLDER
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
  <ProfilePic/>
    <div className="content">
      This is a placeholder so business logic can be implemented. Trust the process. But also change if you want.
    </div>
  </div>
  <footer className="card-footer">
    <a href="#" className="card-footer-item">See All Posts</a>
    <a href="#" className="card-footer-item">My Posts</a>
  </footer>
</div>
  )
}

export default ProfileBox
