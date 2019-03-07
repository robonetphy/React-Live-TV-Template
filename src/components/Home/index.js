import React, { Component } from "react";
import styled from "styled-components";
import { withAuthorization } from "../Session";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import * as IMAGE from "../../constants/image";
import * as NAME from "../../constants/name";
import * as DESCRIPT from "../../constants/descript";
const HomeWrapper = styled.div`
  background: white;
  height: 94vh;
  color: black;
`;
const CardWrapper = styled.div`
  float: left;
  width: 25%;
  padding: 5px;
`;
const Card = styled.div`
  max-width: 100%;
  border-radius: 5px;
  margin: 0px;
  padding: 0px;
  background-color: #55efc4;
`;
const Image = styled.img`
  max-width: 100%;
  height: 250px;
  width: 800px;
  margin: 0px;
  padding: 0px;
`;
const DataWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 0;
`;
const VideoTitle = styled.h4`
  padding: 10px;
  text-align: center;
  font-size: 2em;
`;
const VideoAction = styled.div`
  background-color: rgba(13, 166, 146, 0.1);
  padding: 15px;
`;

const VideoDescript = styled.h6`
  margin-bottom: 15px;
  text-align: center;
  font-size: 0.9em;
`;
const VideoLink = styled(Link)`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <HomeWrapper>
        <VideoCard
          URL={ROUTES.GARVPUNJAB}
          ImageURL={IMAGE.GARVPUNJAB}
          Title={NAME.GARVPUNJAB}
          Descript={DESCRIPT.GARVPUNJAB}
        />

        <VideoCard
          URL={ROUTES.LIVESTREAM}
          ImageURL={IMAGE.LIVESTREAM}
          Title={NAME.LIVESTREAM}
          Descript={DESCRIPT.LIVESTREAM}
        />

        <VideoCard
          URL={ROUTES.PHANTAM}
          ImageURL={IMAGE.PHANTAM}
          Title={NAME.PHANTAM}
          Descript={DESCRIPT.PHANTAM}
        />

        <VideoCard
          URL={ROUTES.PUNJABI720}
          ImageURL={IMAGE.PUNJABI720}
          Title={NAME.PUNJABI720}
          Descript={DESCRIPT.PUNJABI720}
        />
      </HomeWrapper>
    );
  }
}
class VideoCard extends Component {
  render() {
    return (
      <CardWrapper>
        <Card>
          <Image src={this.props.ImageURL} />
          <DataWrapper>
            <VideoTitle>{this.props.Title}</VideoTitle>
            <VideoDescript>{this.props.Descript}</VideoDescript>
            <VideoAction>
              <VideoLink to={this.props.URL}>Watch</VideoLink>
            </VideoAction>
          </DataWrapper>
        </Card>
      </CardWrapper>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
