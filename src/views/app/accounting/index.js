import React, { Suspense } from "react";

const Acct = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./accounting")
);

const Accounting = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <Acct {...props}/>
  </Suspense>
);

export default Accounting;
