import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import fakeAuth from './FakeAuth'

const Routes = {
    Public() {
        return <h3> Public </h3>;
    },
    Protected() {
        return <h3> Protected </h3>;
    },
    PrivateRoute({ component: Component, ...rest }) {
        return (
          <Route
            {...rest}
            render={props =>
              fakeAuth.isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
        );
      }
      
      
}

export default Routes;