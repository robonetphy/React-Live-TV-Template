import React, { Component } from "react";
import Player from "../Player";
import { withAuthorization } from "../Session";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import * as NAME from "../../constants/name";
import * as DESCRIPT from "../../constants/descript";

import * as IMAGE from "../../constants/image";
class StreamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <Player
          Stream={this.props.LiveStream}
          Name={this.props.Name}
          Description={this.props.Description}
        />
        <Card Name="Trending Channels" />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="mt-lg-5 ">
        <h4 className="ml-lg-2">{this.props.Name}</h4>

        <div className="container-fluid mt-lg-5 ">
          <div
            id="carouselExampleIndicators0"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <Link to={ROUTES.GARVPUNJAB}>
                        {" "}
                        <img
                          className="card-img-top"
                          src={IMAGE.GARVPUNJAB}
                          alt="Card"
                        />
                        <div className="card-body">
                          <div className="overlay">
                            <div className="text">
                              <p className="card-text">{DESCRIPT.GARVPUNJAB}</p>
                            </div>
                          </div>
                          <h5 className="card-title">{NAME.GARVPUNJAB}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <Link to={ROUTES.PUNJABI720}>
                        <img
                          className="card-img-top"
                          src="https://picsum.photos/1280/720"
                          alt="Card"
                        />
                        <div className="card-body">
                          <div className="overlay">
                            <div className="text">
                              <p className="card-text">{DESCRIPT.PUNJABI720}</p>
                            </div>
                          </div>
                          <h5 className="card-title">{NAME.PUNJABI720}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <Link to={ROUTES.LIVESTREAM}>
                        {" "}
                        <img
                          className="card-img-top"
                          src={IMAGE.LIVESTREAM}
                          alt="Card"
                        />
                        <div className="card-body">
                          <div className="overlay">
                            <div className="text">
                              <p className="card-text">{DESCRIPT.LIVESTREAM}</p>
                            </div>
                          </div>
                          <h5 className="card-title">{NAME.LIVESTREAM}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <Link to={ROUTES.PHANTAM}>
                        {" "}
                        <img
                          className="card-img-top"
                          src={IMAGE.PHANTAM}
                          alt="Card"
                        />
                        <div className="card-body">
                          <div className="overlay">
                            <div className="text">
                              <p className="card-text">{DESCRIPT.PHANTAM}</p>
                            </div>
                          </div>
                          <h5 className="card-title">{NAME.PHANTAM}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <img
                        className="card-img-top"
                        src={IMAGE.GARVPUNJAB}
                        alt="Card"
                      />
                      <div className="card-body">
                        <div className="overlay">
                          <div className="text">
                            <p className="card-text">{DESCRIPT.GARVPUNJAB}</p>
                          </div>
                        </div>
                        <h5 className="card-title">{NAME.GARVPUNJAB}</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <img
                        className="card-img-top"
                        src="https://picsum.photos/1280/720"
                        alt="Card"
                      />
                      <div className="card-body">
                        <div className="overlay">
                          <div className="text">
                            <p className="card-text">{DESCRIPT.PUNJABI720}</p>
                          </div>
                        </div>
                        <h5 className="card-title">{NAME.PUNJABI720}</h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <img
                        className="card-img-top"
                        src={IMAGE.LIVESTREAM}
                        alt="Card"
                      />
                      <div className="card-body">
                        <div className="overlay">
                          <div className="text">
                            <p className="card-text">{DESCRIPT.LIVESTREAM}</p>
                          </div>
                        </div>
                        <h5 className="card-title">{NAME.LIVESTREAM}</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <img
                        className="card-img-top"
                        src={IMAGE.PHANTAM}
                        alt="Card"
                      />
                      <div className="card-body">
                        <div className="overlay">
                          <div className="text">
                            <p className="card-text">{DESCRIPT.PHANTAM}</p>
                          </div>
                        </div>
                        <h5 className="card-title">{NAME.PHANTAM}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators0"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators0"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="viewmore mt-lg-3">
          <Link to={ROUTES.LIVE}>View More ></Link>
        </div>
      </div>
    );
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(StreamPage);
