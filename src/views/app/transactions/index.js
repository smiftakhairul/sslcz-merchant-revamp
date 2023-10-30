import { checkPermission } from "helpers/permissions";
import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

const Transaction = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./transaction")
);

const Transactions = (props) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {checkPermission(false, 'transactionsMerchant', 'view') && <Transaction {...props}/>}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

export default Transactions;
