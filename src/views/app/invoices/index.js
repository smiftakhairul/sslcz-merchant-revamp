import { checkPermission } from "helpers/permissions";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const InvoiceList = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './invoice-list/invoice-list')
);
const InvoiceConfigurations = React.lazy(() =>
    import(/* webpackChunkName: "invoice-configuration'" */ './invoice-configuration/invoice-configuration')
);
const CreateInvoiceForm = React.lazy(() =>
    import(/* webpackChunkName: "create-invoice" */ './invoice-list/_partials/create-invoice-form')
);

const DefaultInvoice = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            {checkPermission(false, 'merchantInvoice', 'view') && <Redirect
                exact from={`${match.url}/`} to={`${match.url}/list`}
            />}
            {checkPermission(false, 'merchantInvoice', 'view') && <Route
                path={`${match.url}/list`}
                render={props => <InvoiceList {...props} />}
            />}
            {/* {checkPermission(false, 'merchantInvoiceConfiguration', 'view') && <Route
                path={`${match.url}/configuration`}
                render={props => <InvoiceConfigurations {...props} />}
            />} */}
            <Route
                path={`${match.url}/configuration`}
                render={props => <InvoiceConfigurations {...props} />}
            />
            {checkPermission(false, 'merchantInvoice', 'add') && <Route
                path={`${match.url}/create/:slug`}
                render={props => <CreateInvoiceForm {...props} />}
            />}
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);

export default DefaultInvoice;
