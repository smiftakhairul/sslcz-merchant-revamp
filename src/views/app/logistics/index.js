import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";


const Orders = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './orders/orders')
);
const BulkOrders = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './bulk-orders/bulk-orders')
);
const BulkOrderDetails = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './bulk-orders/_partials/bulk-order-details/bulk-order-details')
);
const PickupStores = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './pickup-stores/pickup-stores')
);
const Billings = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './billings/billings')
);
const BulkUpload = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './bulk-orders/_partials/bulk-upload/bulk-upload')
);

const DefaultAnalytics = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/order/list`}/>
            <Route
                path={`${match.url}/order/list`}
                render={props => <Orders {...props} />}
            />
            <Route
                path={`${match.url}/bulk-order/list`}
                render={props => <BulkOrders {...props} />}
            />
            <Route
                path={`${match.url}/bulk-order-details/:bulkId`}
                render={props => <BulkOrderDetails {...props} />}
            />
            <Route
                path={`${match.url}/bulk-order/upload`}
                render={props => <BulkUpload {...props} />}
            />
            <Route
                path={`${match.url}/pickup-store/list`}
                render={props => <PickupStores {...props} />}
            />
            <Route
                path={`${match.url}/billing/list`}
                render={props => <Billings {...props} />}
                // work here
            />
            {/* <Redirect to="/error" /> */}
        </Switch>
    </Suspense>
);

export default DefaultAnalytics;
