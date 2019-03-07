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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="App FullHeightSignin">
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
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="off"
                  value={password}
                  onChange={this.onChange}
                />
              </div>

              <div className="FormField">
                <button
                  className="FormField__Button mr-20"
                  disabled={isInvalid}
                  type="submit"
                >
                  Sign In
                </button>
                <Link to={ROUTES.SIGN_UP} className="FormField__Link">
                  Create an account
                </Link>
                <Link to={ROUTES.PASSWORD_FORGET} className="FormField__Link">
                  Forgot Password ?
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

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
