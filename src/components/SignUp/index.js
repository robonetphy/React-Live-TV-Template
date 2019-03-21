import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import "../../form.css";
import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LIVE);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <div className="container mt-lg-5">
        <div className="FormTitle">
          <NavLink
            to={ROUTES.SIGN_IN}
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
            style={{ textDecoration: "none" }}
          >
            Sign In
          </NavLink>
          or
          <NavLink
            exact
            to={ROUTES.SIGN_UP}
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </NavLink>
        </div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="SignupName">Name</label>
            <input
              type="text"
              class="form-control mb-lg-2"
              id="SinupName"
              aria-describedby="NameHelp"
              placeholder="Enter Name"
              autoComplete="off"
              name="username"
              value={username}
              onChange={this.onChange}
            />
            <small id="NameHelp" class="form-text text-muted">
              Remember This Might HelpFull
            </small>
          </div>
          <div class="form-group">
            <label for="SignupPassword1">Password</label>
            <input
              type="password"
              class="form-control mb-lg-2"
              id="SignupPassword1"
              placeholder="Password"
              autoComplete="off"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
          </div>
          <div class="form-group">
            <label for="SignupPassword2">Confirm Password</label>
            <input
              type="password"
              class="form-control mb-lg-2"
              id="SignupPassword2"
              placeholder="Password"
              autoComplete="off"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
          </div>
          <div class="form-group">
            <label for="SignupEmail">Email address</label>
            <input
              type="email"
              class="form-control mb-lg-2"
              id="SinupEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              I agree all statements in
              <a
                href="/"
                className="FormField__TermsLink"
                style={{ textDecoration: "none" }}
              >
                {" "}
                terms of service
              </a>
            </label>
          </div>
          <button type="submit" class="btn btn-primary" disabled={isInvalid}>
            Sign Up
          </button>
          <Link
            to={ROUTES.SIGN_IN}
            className="FormField__Link"
            style={{ textDecoration: "none" }}
          >
            I'm already member
          </Link>
        </form>
        <div className="container mt-lg-2">
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);
export default SignUpPage;

export { SignUpForm, SignUpLink };
