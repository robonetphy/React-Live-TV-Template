import React, { Component } from "react";
import styled from "styled-components";
import Player from "../Player";
import { withAuthorization } from "../Session";
const LiveWrapper = styled.div`
  background: white;
  height: 94vh;
`;
const LiveVideo = styled.div`
  display: flex;
  justify-content: center;
`;

class StreamPage extends Component {
  render() {
    return (
      <LiveWrapper>
        <LiveVideo>
          <Player Stream={this.props.LiveStream} Name={this.props.Name} />
        </LiveVideo>
      </LiveWrapper>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(StreamPage);
