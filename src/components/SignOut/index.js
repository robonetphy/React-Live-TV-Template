import React from "react";

import { withFirebase } from "../Firebase";
import styled from "styled-components";
const Styledbutton = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  border: none;
  font-size: 0.9em;
  background-color: #2e4158;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`;
const SignOutButton = ({ firebase }) => (
  <Styledbutton type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Styledbutton>
);

export default withFirebase(SignOutButton);
