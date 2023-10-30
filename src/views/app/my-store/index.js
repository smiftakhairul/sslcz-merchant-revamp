import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MyStore = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-list/my-store")
);
const MyStoreGroups = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-groups/store-groups")
);
const MyStoreGateways = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-gateways/gateways")
);
const MyStoreDiscounts = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/store-discounts/discounts")
);
const MyStoreTerminal = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/manage-terminal/terminal")
);
const MyStoreDailyBalance = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/store-daily-balance/store-daily-balance")
);
const MyStoreEmiSettings = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/emi-settings/emi-settings")
);

const ManageSettlement = React.lazy(() =>
import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/manage-settlement/manage-settlement")
);

const ManageSubscription = React.lazy(() =>
import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/manage-qr/manage-qr")
);

const NewSubscription = React.lazy(() =>
import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/manage-qr/new-qr")
);

const UpdateSubscription = React.lazy(() =>
import(/* webpackChunkName: "application-chat" */ "./store-list/_partials/manage-qr/update-qr")
);

const MyStores = ({match}) => (
  <Suspense fallback={<div className="loading"/>}>
      <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
          <Route
              path={`${match.url}/list`}
              render={props => <MyStore {...props} />}
          />
          <Route
              path={`${match.url}/groups`}
              render={props => <MyStoreGroups {...props} />}
          />
          <Route
              path={`${match.url}/gateways`}
              render={props => <MyStoreGateways {...props} />}
          />
          <Route
              path={`${match.url}/discounts/:stid`}
              render={props => <MyStoreDiscounts {...props} />}
          />
          <Route
              path={`${match.url}/terminal/:stid`}
              render={props => <MyStoreTerminal {...props} />}
          />
          <Route
              path={`${match.url}/store-daily-balance/:strid`}
              render={props => <MyStoreDailyBalance {...props} />}
          />
          <Route
              path={`${match.url}/manage-settlement/:stid`}
              render={props => <ManageSettlement {...props} />}
          />
          <Route
              path={`${match.url}/emi-settings/:stid`}
              render={props => <MyStoreEmiSettings {...props} />}
          />
          <Route
              path={`${match.url}/subscription/:stid`}
              render={props => <ManageSubscription {...props} />}
          />
          <Route
              path={`${match.url}/new-subscription/:stid`}
              render={props => <NewSubscription {...props} />}
          />
          <Route
              path={`${match.url}/update-subscription/:id`}
                render={props => <UpdateSubscription  {...props} />}
            />
          <Redirect to="/error" />
      </Switch>
  </Suspense>
);

export default MyStores;
