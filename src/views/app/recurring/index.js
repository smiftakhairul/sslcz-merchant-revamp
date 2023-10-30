import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const RecurringList = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './recurring-list')
);
const CreateRecurring = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './create-recurring')
);
const UpdateRecurring = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-ecommerce" */ './update-recurring')
);

const DefaultRecurring = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
            <Route
                path={`${match.url}/list`}
                render={props => <RecurringList {...props} />}
            />
            <Route
                path={`${match.url}/new-recurring`}
                render={props => <CreateRecurring {...props} />}
            />
            <Route
                path={`${match.url}/update-recurring/:id`}
                render={props => <UpdateRecurring {...props} />}
            />
        </Switch>
    </Suspense>
);
export default DefaultRecurring;
