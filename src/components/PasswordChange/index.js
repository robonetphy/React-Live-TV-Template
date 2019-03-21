import React, { Component } from "react";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div className="container mt-lg-5">
        <div className="container mb-lg-3">
          <div>Hi,</div>
          {this.props.UserEmail}
        </div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="SignupEmail">New Password</label>
            <input
              type="password"
              class="form-control mb-lg-2"
              id="SinupEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="off"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="SignupEmail">Confirm New Password</label>
            <input
              type="password"
              class="form-control mb-lg-2"
              id="SinupEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="off"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" class="btn btn-primary" disabled={isInvalid}>
            Reset My Password
          </button>
        </form>
        <div className="container mt-lg-2">
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default withFirebase(PasswordChangeForm);
