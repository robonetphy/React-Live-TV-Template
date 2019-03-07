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
      <div className="App FullHeightPasswordForget">
        <div className="App__Aside">
          <div className="App_Aside_Content">
            <div>Hi,</div>
            {this.props.UserEmail}
          </div>
        </div>
        <div className="App__Form">
          <div className="FormTitle FormTitle__Link--Active FormTitle__Link">
            Password Forget
          </div>
          <div className="FormCenter psForm">
            <form onSubmit={this.onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label">New Password</label>
                <input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  className="FormField__Input"
                  placeholder="New Password"
                />

                <label className="FormField__Label">Confirm New Password</label>
                <input
                  type="password"
                  className="FormField__Input"
                  placeholder="Confirm New Password"
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                />
              </div>
              <div className="FormField">
                <button
                  className="FormField__Button mr-20"
                  disabled={isInvalid}
                  type="submit"
                >
                  Reset My Password
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

export default withFirebase(PasswordChangeForm);
