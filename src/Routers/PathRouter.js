import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";      
import AppRouter from '../Routers/AppRouter';
import HomePage from '../Pages/user/home_page';
import Content from '../Components/user/content';
// import Products from '../Components/user/Products';
import ProductsContainer from '../Containers/user/ProductsContainer';
import CartContainer from '../Containers/user/CartContainer';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <AppRouter
                            path="/admin"
                            layout
                            exact
                            component
                        >
                        </AppRouter>
                        <AppRouter
                            path="/"
                            layout={HomePage}
                            exact
                            component={Content}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/products"
                            layout={HomePage}
                            exact
                            component={ProductsContainer}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/giohang"
                            layout={HomePage}
                            exact
                            component={CartContainer}
                        >
                        </AppRouter>
                    </Switch>
                </Router>
            </div>
        )
    }
}
