import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const Orders = lazy(() =>
    import(/* webpackChunkName: "geo-location" */ './orders/orders')
);
const Products = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './products/products')
);
const Categories = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './categories/categories')
);
const Brands = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './brands/brands')
);
const Stores = lazy(() =>
    import(/* webpackChunkName: "market-share" */ './stores/stores')
);

const DefaultFcommerce = ({match}) => (
    <Suspense fallback={<div className="loading"/>}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/orders`}/>
            <Route
                path={`${match.url}/orders`}
                render={props => <Orders {...props} />}
            />
            <Route
                path={`${match.url}/products`}
                render={props => <Products {...props} />}
            />
            <Route
                path={`${match.url}/categories`}
                render={props => <Categories {...props} />}
            />
            <Route
                path={`${match.url}/brands`}
                render={props => <Brands {...props} />}
            />
            <Route
                path={`${match.url}/stores`}
                render={props => <Stores {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);

export default DefaultFcommerce;
