import { checkPermission } from "helpers/permissions";
import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

const DB = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./dashboard")
);

const Dashboard = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {checkPermission(false, 'dashboard', 'view') && <DB {...props}/>}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Dashboard;
