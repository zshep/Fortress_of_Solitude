import React, { useState } from "react";
// import { LOGIN, LOGOUT } from "../utils/actions";
// import { useLoginContext } from "../utils/LoginContext";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

function LoginCard() {
  const [authenticated, setAuthenticated] = useState(false);

  // const loginWithEmailAndPassword = () => setAuthenticated(true);

  // const loginWithProvider = () => setAuthenticated(true);

  const handleClose = () => setAuthenticated(true);

  return (
    <section className="section">
      <LoginForm />

      <SignInSuccess active={authenticated} handleClose={handleClose} />
    </section>
  );
}

// ***----Consider Deletion----***

// const LoginButton = ({ icon, name, onClick }) => (
//   <div className="field">
//     <p
//       className="control button is-medium is-danger"
//       style={{ width: "300px" }}
//       onClick={onClick}
//     >
//       <span className="icon">
//         <i className={`fa fa-${icon}`} aria-hidden="true"></i>
//       </span>
//       <span>{`Sign In With ${name}`}</span>
//     </p>
//   </div>
// );

function LoginForm() {
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  // const [loggedIn, dispatch] = useLoginContext();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async () => {
    const submission = {
      email,
      password,
    };

    try {
      const { data } = await loginUser({
        variables: { ...submission },
      });

      if (!data) {
        throw new Error("No user found with those credentials.");
      }

      Auth.login(data.login.token);
      // route user to their personal page?
      // console.log(`/profile/${data.login.user._id}`)
      window.location.assign('/profile')
    } catch (err) {
      throw new Error("Something went wrong!");
    }


    // sets logged in state to true
    // do we really even need?
    // await dispatch({
    //   type: LOGIN,
    //   token: 12345,
    //   user: submission
    // });

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container has-text-centered box"
      style={{ maxWidth: "300px" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="control">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="email"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control buttons is-centered">
            <input
              className="button is-medium is-dark is-fullwidth"
              type="submit"
              value="Sign In"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const SignInSuccess = ({ active, handleClose }) => (
  <div className={`modal ${active && "is-active"}`}>
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

export default LoginCard;
