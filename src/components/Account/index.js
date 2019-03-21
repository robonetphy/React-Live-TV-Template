import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import PasswordChangeForm from "../PasswordChange";
import avatar from "../../img/avatar.png";
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-lg-4 order-lg-1 text-center mb-xl-5">
              <img
                src={avatar}
                className="mx-auto img-fluid img-circle d-block rounded"
                alt="avatar"
              />
              <h6 className="mt-2">Upload a different photo</h6>
              <label className="custom-file">
                <input type="file" id="file" className="custom-file-input" />
                <span className="custom-file-control btn btn-primary">
                  Choose file
                </span>
              </label>
            </div>
            <div className="col-lg-8 order-lg-2 mt-lg-3 container">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="/"
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Change Password
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    data-target="#edit"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    other info
                  </a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h4 className="mb-3">User Name</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Web Designer, UI/UX Engineer</p>
                      <h6>Hobbies</h6>
                      <p>
                        Indie music, skiing and hiking. I love the great
                        outdoors.
                      </p>
                      <h6>Recent badges</h6>
                      <a
                        href="/"
                        className="badge badge-dark badge-pill m-sm-1 p-sm-2"
                      >
                        html5
                      </a>
                      <a
                        href="/"
                        className="badge badge-dark badge-pill m-sm-1 p-sm-2"
                      >
                        react
                      </a>
                      <a
                        href="/"
                        className="badge badge-dark badge-pill m-sm-1 p-sm-2"
                      >
                        codeply
                      </a>
                    </div>

                    <div className="col-md-12">
                      <h5 className="mt-2">
                        <span className="fa fa-clock-o ion-clock float-right" />{" "}
                        Recent Activity
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="messages">
                  <PasswordChangeForm UserEmail={authUser.email} />
                </div>
                <div className="tab-pane" id="edit">
                  <form>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        First name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value="Jane"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Last name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value="Bishop"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Email
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="email"
                          value="email@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Company
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Website
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="url" value="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Address
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="City"
                        />
                      </div>
                      <div className="col-lg-3">
                        <input
                          className="form-control"
                          type="text"
                          value=""
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Time Zone
                      </label>
                      <div className="col-lg-9">
                        <select
                          id="user_time_zone"
                          className="form-control"
                          size="0"
                        >
                          <option value="Hawaii">(GMT-10:00) Hawaii</option>
                          <option value="Alaska">(GMT-09:00) Alaska</option>
                          <option value="Pacific Time (US &amp; Canada)">
                            (GMT-08:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="Arizona">(GMT-07:00) Arizona</option>
                          <option value="Mountain Time (US &amp; Canada)">
                            (GMT-07:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option value="Central Time (US &amp; Canada)">
                            (GMT-06:00) Central Time (US &amp; Canada)
                          </option>
                          <option value="Eastern Time (US &amp; Canada)">
                            (GMT-05:00) Eastern Time (US &amp; Canada)
                          </option>
                          <option value="Indiana (East)">
                            (GMT-05:00) Indiana (East)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Username
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value="janeuser"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value="11111122333"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Confirm password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value="11111122333"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="reset"
                          className="btn btn-secondary"
                          value="Cancel"
                        />
                        <input
                          type="button"
                          className="btn btn-primary"
                          value="Save Changes"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
//<PasswordChangeForm UserEmail={authUser.email} />
