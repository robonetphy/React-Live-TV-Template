import React from "react";
import { NavLink } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";
import styled from "styled-components";

const Navulist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2e4158;
`;
const StyledLink = styled(NavLink)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`;

const Navlist = styled.li`
  float: right;
`;
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Navulist>
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
    <Navlist>
      <StyledLink to={ROUTES.ADMIN} activeClassName="active_navbar">
        Admin
      </StyledLink>
    </Navlist>
  </Navulist>
);

const NavigationNonAuth = () => (
  <Navulist>
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
);

export default Navigation;
