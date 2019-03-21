import React, { Component } from "react";
import styled from "styled-components";
import Hls from "hls.js";

const VideoTitle = styled.h2`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 25px;
  font-weight: 400;
`;
const VideoLiveButtonTitle = styled.span`
  padding: 2px 10px;
  display: inline-block;
  border: 1px solid red;
  line-height: 25px;
  font-size: 14px;
  margin-right: 5px;
  font-weight: 400;
  border-radius: 5px;
`;
const VideoDescription = styled.div`
  width: 80%;
  font-size: 0.8em;
`;
export default class Player extends Component {
  constructor(props) {
    super(props);
    this._onTouchInsidePlayer = this._onTouchInsidePlayer.bind(this);
  }
  componentDidMount() {
    if (Hls.isSupported() && this.player) {
      const hls = new Hls();
      const video = this.player;
      video.addEventListener("contextmenu", e => {
        e.preventDefault();
        return false;
      });
      const streamURL = this.props.Stream;
      hls.loadSource(streamURL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
  }
  _onTouchInsidePlayer() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
  render() {
    const style = {
      width: 1000,
      height: "40hv",
      background: "#000"
    };

    return (
      <div className="MyMarginTop">
        <div className="embed-responsive embed-responsive-21by9">
          <video
            className="embed-responsive-item"
            controls={false}
            onClick={this._onTouchInsidePlayer}
            style={style}
            ref={player => (this.player = player)}
            autoPlay={true}
          />
        </div>
        <div className="container MyMarginTop">
          <VideoTitle>
            <VideoLiveButtonTitle>Live</VideoLiveButtonTitle>
            {this.props.Name}
            <VideoDescription className="MyMarginTop MyFontSize">
              {this.props.Description}
            </VideoDescription>
          </VideoTitle>
        </div>
      </div>
    );
  }
}
