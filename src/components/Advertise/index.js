import React from "react";
class AdvertPage extends React.Component {
  myClick() {
    alert("The LiveTv Contact You Soon,Thanks For approching Us");
  }
  render() {
    return (
      <form className="container mt-lg-5">
        <div className="form-group">
          <label for="InputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            aria-describedby="NameHelp"
            placeholder="Enter Name"
          />
          <small id="NameHelp" className="form-text text-muted">
            Name Must be Full
          </small>
        </div>

        <div className="form-group">
          <label for="InputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="InputNumber">Number</label>
          <input
            type="Number"
            className="form-control"
            id="InputNumber"
            placeholder="Number"
          />
        </div>
        <div className="form-group">
          <label for="InputCompany">Company</label>
          <input
            type="text"
            className="form-control"
            id="InputCompany"
            placeholder="Name of Company"
          />
        </div>

        <div className="form-group">
          <label for="InputContact">Contact For</label>
          <input
            type="text"
            className="form-control"
            id="InputContact"
            placeholder="Reason For Contact"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.myClick}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default AdvertPage;
