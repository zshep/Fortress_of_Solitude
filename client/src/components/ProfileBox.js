import React from 'react'
import ProfilePic from './ProfilePic'

function ProfileBox() {
  return (
    
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Profile Page PLACEHOLDER JACOB. PLACEHOLDER
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
  <ProfilePic/>
    <div class="content">
      This is a placeholder so business logic can be implemented. Trust the process. But also change if you want.
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">See All Posts</a>
    <a href="#" class="card-footer-item">My Posts</a>
  </footer>
</div>
  )
}

export default ProfileBox
