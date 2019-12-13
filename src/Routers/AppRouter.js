import React from 'react';

import { Route } from 'react-router';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={(props,match,history) => (
        <Layout {...history} {...match}>
            <Component {...props} />
        </Layout>
    )} />
)
export default AppRoute;