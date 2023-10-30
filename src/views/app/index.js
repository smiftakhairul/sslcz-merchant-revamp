import React, { Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../components/layouts/app";

const Transactions = React.lazy(() =>
  import(/* webpackChunkName: "transactions" */ "./transactions")
);
const InvoiceDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./invoices")
);
const DefaultPaymentLinkList = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./payment-link")
);
const DefaultRefundRequest = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ "./refund")
);
const ChargeBack = React.lazy(() =>
  import(/* webpackChunkName: "chargeback" */ "./changeback-request")
);
const DefaultRecurring = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./recurring")
);
const DefaultAnalytics = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./analytics")
);
const MyStore = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ "./my-store")
);
const FCommerceDefault = React.lazy(() =>
  import(/* webpackChunkName: "fecommerce-default" */ "./fcommerce")
);
const DashboardPrimary = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./dashboards")
);
const IdTracking = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./id-tracking")
);
const Accounting = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./accounting")
);
const MyUsers = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./my-users")
);
const Pnr = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./pnr")
);
const Logistics = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-dashboard" */ "./logistics")
);

const App = (props) => {
  const { match } = props;

  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <DashboardPrimary {...props} />}
            />
            <Route
              path={`${match.url}/transactions`}
              render={(props) => <Transactions {...props} />}
            />
            <Route
              path={`${match.url}/invoice`}
              render={(props) => <InvoiceDefault {...props} />}
            />
            <Route
              path={`${match.url}/payment`}
              render={(props) => <DefaultPaymentLinkList {...props} />}
            />
            <Route
              path={`${match.url}/recurring`}
              render={(props) => <DefaultRecurring {...props} />}
            />
            <Route
              path={`${match.url}/refund`}
              render={(props) => <DefaultRefundRequest {...props} />}
            />
            <Route
              path={`${match.url}/chargeback`}
              render={(props) => <ChargeBack {...props} />}
            />
            <Route
              path={`${match.url}/fcommerce`}
              render={(props) => <FCommerceDefault {...props} />}
            />
            <Route
              path={`${match.url}/analytics`}
              render={(props) => <DefaultAnalytics {...props} />}
            />
            <Route
              path={`${match.url}/my-store`}
              render={(props) => <MyStore {...props} />}
            />
            <Route
              path={`${match.url}/id-tracking`}
              render={(props) => <IdTracking {...props} />}
            />
            <Route
              path={`${match.url}/accounting`}
              render={(props) => <Accounting {...props} />}
            />
            <Route
              path={`${match.url}/my-users`}
              render={(props) => <MyUsers {...props} />}
            />
            <Route
              path={`${match.url}/pnr`}
              render={(props) => <Pnr {...props} />}
            />
            <Route
              path={`${match.url}/logistics`}
              render={(props) => <Logistics {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => {
  const { containerClassnames } = state.menu;
  const store = state.SelectStore.store;
  return { containerClassnames, store };
};

export default withRouter(connect(mapStateToProps, {})(App));
