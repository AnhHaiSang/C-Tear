import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";      
import AppRouter from '../Routers/AppRouter';
import HomePage from '../Pages/user/home_page';
import HomePageAdmin from '../Pages/admin/HomePageAdmin';
import Content from '../Components/user/content';
// import Products from '../Components/user/Products';
import ProductsContainer from '../Containers/user/ProductsContainer';
import CartContainer from '../Containers/user/CartContainer';
import DetailContainer from '../Containers/user/detailContainer';
// import Footer from '../Components/user/footer';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <AppRouter
                            path="/admin"
                            layout={HomePageAdmin}
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
                            path="/productlist"
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
                        <AppRouter
                            path="/productDetail/:id"
                            layout={HomePage}
                            exact
                            component={DetailContainer}
                        ></AppRouter>
                    </Switch>
                </Router>
            </div>
        )
    }
}
