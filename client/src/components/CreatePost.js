import React from 'react'

function CreatePost() {
  return (
    <div class="container box p-6
                has-background-light">
      <h2 class="subtitle has-text-centered">
        Volunteer Opportunity #xxxxxx
      </h2>
      <form action="">
        <div class="field">
          <label class="label">Title of Your Post</label>
          <div class="control">
            <input class="input" type="text"
                   placeholder="'Litter at the park' etc.." />
          </div>
        </div>
  
        <div class="field">
          <label class="label">What Category of work is this?</label>
          <div class="control has-icons-left
                      has-icons-right">
            <input
              class="input"
              type="text"
              placeholder=" Cleaning, Repair, Construction etc..."
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">
            Volunteer Opportunity Description
          </label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="How can someone help?"
            ></textarea>
          </div>
        </div>
  
  
        <div class="field is-grouped">
          <div class="control">
            <button class="button" style={{ fontFamily: 'Permanent Marker', background: '#A6CE90'  }}>
              Create Post
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreatePost