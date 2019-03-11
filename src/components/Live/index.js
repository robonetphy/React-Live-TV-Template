import React from "react";

import * as IMAGE from "../../constants/image";
import * as NAME from "../../constants/name";
import * as DESCRIPT from "../../constants/descript";

import * as ROUTES from "../../constants/routes";

import { Link } from "react-router-dom";
const LivePage = () => (
  <div>
    <Channels />
  </div>
);

class Channels extends React.Component {
  render() {
    return (
      <div className="mt-lg-5  ">
        <h4 className="ml-lg-4"> All Channels</h4>
        <div className="row ml-xl-4 mt-xl-5">
          <div>
            <Link to={ROUTES.GARVPUNJAB}>
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
            </Link>
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
                <img className="card-img-top" src={IMAGE.PHANTAM} alt="Card" />
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
              <img className="card-img-top" src={IMAGE.LIVESTREAM} alt="Card" />
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
        <div className="row ml-xl-4 mt-xl-5">
          <div>
            <div className="card mr-lg-3" style={{ width: "14rem" }}>
              <img className="card-img-top" src={IMAGE.GARVPUNJAB} alt="Card" />
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
              <img className="card-img-top" src={IMAGE.LIVESTREAM} alt="Card" />
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
              <img className="card-img-top" src={IMAGE.PHANTAM} alt="Card" />
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
              <img className="card-img-top" src={IMAGE.LIVESTREAM} alt="Card" />
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
    );
  }
}
export default LivePage;
