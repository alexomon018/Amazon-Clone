import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
          //logged in redirect to homepage....
          history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          //created a user and logged in redirect to homepage
          history.push('/');
      })
      .catch((e) => e.message);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            name="email"
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            name="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
