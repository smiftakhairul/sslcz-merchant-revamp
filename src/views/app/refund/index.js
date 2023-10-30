import { checkPermission } from "helpers/permissions";
import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const RefundRequest = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './refund-request')
);
const NewRefundRequest = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './new-refund-request')
);

const DefaultRefundRequest = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            {checkPermission(false, 'refundInitiatebyMerchant', 'view') && <Redirect 
                exact from={`${match.url}/`} to={`${match.url}/request`}
            />}
            {checkPermission(false, 'refundInitiatebyMerchant', 'view') && <Route
                path={`${match.url}/request`}
                render={props => <RefundRequest {...props} />}
            />}
            {checkPermission(false, 'refundInitiatebyMerchant', 'add') && <Route
                path={`${match.url}/new-request/:tid`}
                render={props => <NewRefundRequest {...props} />}
            />}
        </Switch>
    </Suspense>
);

export default DefaultRefundRequest;
