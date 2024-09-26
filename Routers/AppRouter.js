import React from './node_modules/react';

import {Route} from './node_modules/react-router';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
  export default AppRoute;