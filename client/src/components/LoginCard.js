import React from 'react'

class LoginCard extends React.Component {

  state = {
    authenticated: false
  }

  loginWithEmailAndPassword = () => { this.setState({ authenticated: true }) }

  loginWithProvider = () => { this.setState({ authenticated: true }) }
  
  handleClose = () => { this.setState({ authenticated: false }) }
  
  render() {    
    return(
      <section className="section">

        <LoginForm handleSubmit={this.loginWithEmailAndPassword} />
        
        <SignInSuccess active={this.state.authenticated} handleClose={this.handleClose} />

      </section>
    )
  }
}

const LoginButton = ({ icon, name, onClick }) => (
  <div className="field">
    <p className="control button is-medium is-danger" style={{ width: '300px' }} onClick={onClick}>
      <span className="icon">
        <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      </span>
      <span>{`Sign In With ${name}`}</span>
    </p>
  </div>
);

class LoginForm extends React.Component {

  state = {
    email: null,
    password: null
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = () => this.props.handleSubmit(this.state)

  render() {
    return (
      <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input className="input" name="email" type="email" placeholder="email" required onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <div className="control">
              <input className="input" name="password" type="password" placeholder="password" required onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <div className="control buttons is-centered">
              <input className="button is-medium is-dark is-fullwidth" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const SignInSuccess = ({ active, handleClose }) => (
  <div className={`modal ${active && 'is-active'}`}>
    <div className="modal-background" onClick={handleClose}></div>
    <div className="modal-content">
      <div className="notification is-success has-text-centered">
        <button className="delete" onClick={handleClose}></button>
        <p>
          <span className="icon is-large">
            <i className="fa fa-check-square fa-2x"></i>
          </span>
          <span className="title"> Sign In Succesful!</span>
        </p>
        
      </div>
    </div>
  </div>
);

export default LoginCard