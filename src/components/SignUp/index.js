import React, { Component } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";

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
        this.props.history.push(ROUTES.HOME);
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
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="FormTitle">
            <NavLink
              to={ROUTES.SIGN_IN}
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>
            or
            <NavLink
              exact
              to={ROUTES.SIGN_UP}
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="FormCenter">
            <form onSubmit={this.onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  autoComplete="off"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="FormField__Input"
                  placeholder="Enter Confirm Password"
                  autoComplete="off"
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input
                    className="FormField__Checkbox"
                    type="checkbox"
                    name="hasAgreed"
                  />
                  I agree all statements in
                  <a
                    href="https://en.wikipedia.org/wiki/T%26C"
                    className="FormField__TermsLink"
                  >
                    terms of service
                  </a>
                </label>
              </div>
              <div className="FormField">
                <button
                  className="FormField__Button mr-20"
                  disabled={isInvalid}
                  type="submit"
                >
                  Sign Up
                </button>
                <Link to={ROUTES.SIGN_IN} className="FormField__Link">
                  I'm already member
                </Link>
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
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
