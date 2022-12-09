import React from 'react';
import { Modal } from 'react-bulma-components';

export default class DeleteModal extends React.Component {
    state = {
        isModal: false
      };
    
      handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
      };
    
      render() {
        const active = this.state.isModal ? "is-active" : "";
        return (
          <div >
            <div className={`modal ${active}`}>
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Are you sure you want to delete this post?</p>
                  <button
                    onClick={this.handleClick}
                    className="delete"
                    aria-label="close"
                  />
                </header>
                <footer className="modal-card-foot">
                  <button className="button is-danger">Delete Post</button>
                  <button onClick={this.handleClick} className="button">
                    Cancel
                  </button>
                </footer>
              </div>
            </div>

            <button onClick={this.handleClick}  className="button m-4" onMouseOver={(e) => {e.target.style.transform = 'scale(1.25)'; }} onMouseOut={(e) => {e.target.style.transform = 'scale(1)';}} style={{ fontFamily: 'Permanent Marker', background: '#ad5050', }}>
  Delete Job
</button>
    
          
          </div>
        );
      }
}