import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const GeoLocation = lazy(() =>
    import(/* webpackChunkName: "geo-location" */ './geo-location/geo-location')
);
const MarketShare = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './market-share/market-share')
);
const MobileOperators = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './mobile-operators/mobile-operators')
);
const UserAgent = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './user-agent/user-agent')
);
const IssuerLocation = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './issuer-location/issuer-location')
);
const SavedCard = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './saved-card/saved-card')
);

const DefaultAnalytics = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/market-share`}/>
            <Route
                path={`${match.url}/market-share`}
                render={props => <MarketShare {...props} />}
            />
            <Route
                path={`${match.url}/geo-location`}
                render={props => <GeoLocation {...props} />}
            />
            <Route
                path={`${match.url}/mobile-operators`}
                render={props => <MobileOperators {...props} />}
            />
            <Route
                path={`${match.url}/user-agent`}
                render={props => <UserAgent {...props} />}
            />
            <Route
                path={`${match.url}/issuer-location`}
                render={props => <IssuerLocation {...props} />}
            />
            <Route
                path={`${match.url}/saved-card`}
                render={props => <SavedCard {...props} />}
            />
        </Switch>
    </Suspense>
);

export default DefaultAnalytics;
