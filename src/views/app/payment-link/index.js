import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const PaymentLink = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './new-payment-link')
);
const PaymentLinkList = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './payment-link-list')
);
const UpdatePaymentLink = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './update-payment-link')
);

const DefaultPaymentLinkList = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/link-list`}/>
            <Route
                path={`${match.url}/link-list`}
                render={props => <PaymentLinkList {...props} />}
            />
            <Route
                path={`${match.url}/new-link`}
                render={props => <PaymentLink {...props} />}
            />
            <Route
                path={`${match.url}/update-link/:id`}
                render={props => <UpdatePaymentLink {...props} />}
            />
        </Switch>
    </Suspense>
);
export default DefaultPaymentLinkList;
