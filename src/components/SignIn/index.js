import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { compose } from "recompose";

//import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
//import { PasswordForgetLink } from "../PasswordForget";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="container mt-lg-5">
        {" "}
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
          <div class="form-group">
            <label for="SignupPassword1">Password</label>
            <input
              type="password"
              class="form-control mb-lg-2"
              id="SignupPassword1"
              placeholder="Password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary" disabled={isInvalid}>
            Sign In
          </button>
          <Link
            to={ROUTES.SIGN_UP}
            className="FormField__Link"
            style={{ textDecoration: "none" }}
          >
            Create an account
          </Link>
          <Link
            to={ROUTES.PASSWORD_FORGET}
            className="FormField__Link"
            style={{ textDecoration: "none" }}
          >
            Forgot Password ?
          </Link>
        </form>
        <div className="container mt-lg-2">
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
