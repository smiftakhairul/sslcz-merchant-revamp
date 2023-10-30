import { checkPermission } from "helpers/permissions";
import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

const IdTracking = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./id-tracking")
);

const IdTrackings = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {checkPermission(false, 'merchantTracking', 'view') && <IdTracking {...props}/>}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default IdTrackings;
