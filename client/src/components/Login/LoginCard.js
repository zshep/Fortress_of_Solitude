import React, { useState } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import ErrorModal from "../Modals/ErrorModal";

function LoginCard() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleClose = () => setAuthenticated(true);

  return (
    <section className="section">
      <LoginForm />

      <SignInSuccess active={authenticated} handleClose={handleClose} />
    </section>
  );
}

function LoginForm() {
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [hidden, setHidden] = useState("is-hidden");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  if (error) {
    return (
      <>
        <ErrorModal message={error.message} activate={true} />
      </>
    );
  }

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
        return new Error("No user found with those credentials.");
      }

      if (error) {
        setHidden({ visibility: "visible" });
      }

      Auth.login(data.login.token);
      window.location.assign("/profile");
    } catch (error) {
      return error
    }

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
        <div className="has-text-centered">
          <p className={`has-text-danger is-size-7 ${hidden}`}>
            Incorrect password
          </p>
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
