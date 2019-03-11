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
      <div className="container  mt-lg-5">
        <div className="FormTitle FormTitle__Link--Active FormTitle__Link  mb-lg-5">
          Password Forget
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
              value={this.state.email}
              onChange={this.onChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <button type="submit" class="btn btn-primary" disabled={isInvalid}>
            Get Link On Mail
          </button>
        </form>
        <div className="container mt-lg-2">
          {error && <p>{error.message}</p>}
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
