import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className="App FullHeightPasswordForget">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="FormTitle FormTitle__Link--Active FormTitle__Link">
            Password Forget
          </div>
          <div className="FormCenter psForm">
            <form onSubmit={this.onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
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
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
