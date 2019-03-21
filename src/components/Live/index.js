import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
class LivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: {}
    };
  }

  componentDidMount() {
    this.props.firebase.Channels().on("value", snapshot => {
      this.setState({
        channels: snapshot.val()
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.Channels().off();
  }
  render() {
    const { channels } = this.state;
    const DynamicCard = [];
    let Cards = [];
    let size = 1;
    let imageurl;
    for (const key in channels) {
      if (!channels.hasOwnProperty(key)) continue;
      const obj = channels[key];
      imageurl = "http://placehold.it/250x250";
      if (obj.ImageURL !== "Null") {
        console.log(obj.ImageURL);
        imageurl = obj.ImageURL;
      }
      Cards.push(
        <div>
          <Link to={obj.Path}>
            <div className="card mr-lg-3" style={{ width: "14rem" }}>
              <img className="card-img-top" src={imageurl} alt="Card" />
              <div className="card-body">
                <div className="overlay">
                  <div className="text">
                    <p className="card-text MyFontSize">
                      {obj.ShortDescription}
                    </p>
                  </div>
                </div>
                <h5 className="card-title">{obj.Name}</h5>
              </div>
            </div>
          </Link>
        </div>
      );
      if (size % 6 === 0) {
        DynamicCard.push(<div className="row ml-xl-4 mt-xl-5">{Cards}</div>);
        Cards = [];
      }
      size++;
    }
    if (size % 6 !== 0) {
      DynamicCard.push(<div className="row ml-xl-4 mt-xl-5">{Cards}</div>);
    }
    return (
      <div className="mt-lg-5  ">
        <h4 className="ml-lg-4"> All Channels</h4>
        {DynamicCard}
      </div>
    );
  }
}

export default withFirebase(LivePage);
