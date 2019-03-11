import React from "react";

import { withFirebase } from "../Firebase";
import styled from "styled-components";
const Styledbutton = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 10px 16px;
  border: none;
  font-size: 0.9em;
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    text-decoration: none;
    background-color: #343a40;
    opacity: 1;
  }
`;
const SignOutButton = ({ firebase }) => (
  <Styledbutton type="button" onClick={firebase.doSignOut} className="bg-dark">
    Sign Out
  </Styledbutton>
);

export default withFirebase(SignOutButton);
