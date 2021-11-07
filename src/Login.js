import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "./pictures/amazon-logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  useEffect(() => {
    document.title = "Amazon Sign-In";
  }, []);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="404" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            <a href="123">Sign In</a>
          </button>
        </form>

        <p>
          By Continuing, you agree to Amazon's Fake Clone{" "}
          <a href="123">Conditions of Use</a> and{" "}
          <a href="123">Privacy Notice.</a>
        </p>
        <p>
          <a href="123">Need help?</a>
        </p>
      </div>

      <div className="login__registerContainer">
        <p>New to Amazon?</p>
        <button className="login__registerButton" onClick={register}>
          <a href="123">Create your Fake Amazon account</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
