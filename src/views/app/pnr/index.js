import React, { Suspense } from "react";

const Pnr = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./pnr")
);

const Pnrs = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <Pnr {...props}/>
  </Suspense>
);

export default Pnrs;
