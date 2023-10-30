import React, { Suspense } from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const MyUser = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./my-users")
);
const MyUserCreate = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./create-user")
);
const MyUserUpdate = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./update-user")
);

const MyUsers = ({match}) => (
  <Suspense fallback={<div className="loading"/>}>
      <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
          <Route
              path={`${match.url}/list`}
              render={props => <MyUser {...props} />}
          />
          <Route
              path={`${match.url}/new-user`}
              render={props => <MyUserCreate {...props} />}
          />
          <Route
              path={`${match.url}/update-user/:id`}
              render={props => <MyUserUpdate {...props} />}
          />
          <Redirect to="/error" />
      </Switch>
  </Suspense>
);

export default MyUsers;
