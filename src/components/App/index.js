import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import StreamPage from "../StreamingPages";

import { withAuthentication } from "../Session";

import * as ROUTES from "../../constants/routes";
import * as STREAM from "../../constants/stream";
import * as NAME from "../../constants/name";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route
        path={ROUTES.GARVPUNJAB}
        render={props => (
          <StreamPage
            {...props}
            LiveStream={STREAM.GARVPUNJAB}
            Name={NAME.GARVPUNJAB}
          />
        )}
      />
      <Route
        path={ROUTES.LIVESTREAM}
        render={props => (
          <StreamPage
            {...props}
            LiveStream={STREAM.LIVESTREAM}
            Name={NAME.LIVESTREAM}
          />
        )}
      />
      <Route
        path={ROUTES.PHANTAM}
        render={props => (
          <StreamPage
            {...props}
            LiveStream={STREAM.PHANTAM}
            Name={NAME.PHANTAM}
          />
        )}
      />
      <Route
        path={ROUTES.PUNJABI720}
        render={props => (
          <StreamPage
            {...props}
            LiveStream={STREAM.PUNJABI720}
            Name={NAME.PUNJABI720}
          />
        )}
      />
    </div>
  </Router>
);

export default withAuthentication(App);
