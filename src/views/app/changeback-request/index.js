import React, { Suspense } from "react";

const ChargebackRequest = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./chargeback")
);

const ChargebackRequests = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <ChargebackRequest {...props}/>
  </Suspense>
);

export default ChargebackRequests;
