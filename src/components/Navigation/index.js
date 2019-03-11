import React from "react";
import { NavLink, Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  /* <Navulist>
    <Navlist>
      <SignOutButton />
    </Navlist>
    <Navlist>
      <StyledLink to={ROUTES.ACCOUNT} activeClassName="active_navbar">
        Account
      </StyledLink>
    </Navlist>
    <Navlist>
      <StyledLink exact to={ROUTES.LANDING} activeClassName="active_navbar">
        Landing
      </StyledLink>
    </Navlist>
    <Navlist>
      <StyledLink to={ROUTES.HOME} activeClassName="active_navbar">
        Home
      </StyledLink>
    </Navlist>
  </Navulist>*/
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <Link className="navbar-brand mr-lg-5" to={ROUTES.LANDING}>
      <img
        src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png"
        width="30"
        height="30"
        alt=""
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.LIVE}
          >
            LIVE TV <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.LANDING}
          >
            HOME <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-lg-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-lg-5 "
              type="submit"
            >
              Search
            </button>
          </form>
        </li>
      </ul>
      <ul className="navbar-nav ml-lg-5">
        <li className="nav-item  ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.ADVERTIES}
          >
            Advertise with Us
          </NavLink>
        </li>
        <li className="nav-item  ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.ACCOUNT}
          >
            Account
          </NavLink>
        </li>
        <li className="nav-item">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  /*<Navulist>
    <Navlist>
      <StyledLink exact to={ROUTES.LANDING} activeClassName="active_navbar">
        Landing
      </StyledLink>
    </Navlist>
    <Navlist>
      <StyledLink to={ROUTES.SIGN_IN} activeClassName="active_navbar">
        Sign In
      </StyledLink>
    </Navlist>
  </Navulist>
*/
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <Link className="navbar-brand mr-lg-5" to={ROUTES.LANDING}>
      <img
        src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png"
        width="30"
        height="30"
        alt=""
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.LIVE}
          >
            LIVE TV <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.LANDING}
          >
            HOME <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-lg-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-lg-5 "
              type="submit"
            >
              Search
            </button>
          </form>
        </li>
      </ul>
      <ul className="navbar-nav ml-lg-5">
        <li className="nav-item  ">
          <NavLink
            className="nav-link mr-lg-3"
            activeClassName="active"
            exact
            to={ROUTES.ADVERTIES}
          >
            Advertise with Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link mr-lg-3 "
            activeClassName="active"
            exact
            to={ROUTES.SIGN_IN}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
