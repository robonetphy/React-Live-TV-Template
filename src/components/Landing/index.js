import React from "react";
import * as IMAGE from "../../constants/image";
import * as ROUTES from "../../constants/routes";
import "./Landing.css";
import { Link } from "react-router-dom";
import * as NAME from "../../constants/name";
import * as DESCRIPT from "../../constants/descript";
const Landing = () => (
  <div>
    <div className="container-fluid mt-lg-4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://d229kpbsb5jevy.cloudfront.net/crop/bazaar/20181213115327617399/1544682207617.jpg"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Advertise</h5>
              <p>Some infomation about it which is useful</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://d229kpbsb5jevy.cloudfront.net/crop/bazaar/20181213114118340564/1544681478340.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Advertise</h5>
              <p>Some infomation about it which is useful</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://d229kpbsb5jevy.cloudfront.net/crop/bazaar/20181213114253244191/1544681573244.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Advertise</h5>
              <p>Some infomation about it which is useful</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <Card1 Name="Featured Channels" />
    <Card Name="Trending Channels" />
    <Promotion className="webview" />
  </div>
);
class Promotion extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-lg-5 webviewa">
        <div className="myimg p-lg-10" />
        <div className="phone webviewa" />
        <div className="imgcontent webviewa">
          Dont forget we are available everywhere and anywhere
        </div>
        <div className="logo webviewa">
          <div className="logo1 webviewa" />
          <div className="logo2 webviewa" />
        </div>
      </div>
    );
  }
}

class Card1 extends React.Component {
  render() {
    return (
      <div className="mt-lg-5 ">
        <h4 className="ml-lg-2">{this.props.Name}</h4>

        <div className="container-fluid mt-lg-5 ">
          <div
            id="carouselExampleIndicators1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div>
                    <div className="card mr-lg-3" style={{ width: "14rem" }}>
                      <Link to={ROUTES.GARVPUNJAB}>
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
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="viewmore mt-lg-3">
          <a href="/">View More ></a>
        </div>
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
          <a href="/">View More ></a>
        </div>
      </div>
    );
  }
}
export default Landing;
