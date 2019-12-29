import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";      
import AppRouter from '../Routers/AppRouter';
import HomePage from '../Pages/user/home_page';
import HomePageAdmin from '../Pages/admin/HomeAdmin/HomePageAdmin';
import Content from '../Components/user/content';
import Error404 from '../Pages/admin/ErrorPage/Error404';
import ProductsContainer from '../Containers/user/ProductsContainer';
import CartContainer from '../Containers/user/CartContainer';
import DetailContainer from '../Containers/user/detailContainer';
import CatelogyActionPage from '../Pages/admin/CatelogyActionPage/CatelogyActionPage';
import CategoriesContainer from '../Containers/admin/CategoriesContainer';
import Order from '../Components/admin/Order/Order';
import RegisterPage from '../Containers/user/registration';
import Login from '../Containers/user/login'
import Profile from '../Containers/user/profile'
import Abouts from '../Containers/user/abouts'
import LisProductView from '../Components/user/lisproduct';
import ProductsContainerAdmin from '../Containers/admin/ProductsContainerAdmin';
import ChartAdmin from '../Components/admin/ChartAdmin/ChartAdmin';
import ProductsActionPage from '../Pages/admin/ProductActionPage/ProductsActionPage';
import AccoutContainerUser from '../Containers/admin/AccoutContainer';





export default class componentName extends Component {
    render() {
        return (
            
                <Router>
                    <Switch>
                    <AppRouter
                            path="/admin"
                            layout={HomePageAdmin}
                            exact
                            component={ChartAdmin}
                        >  
                        </AppRouter>
                        {/* chưa lam */}
                        <AppRouter
                            path="/admin/productlist" 
                            layout={HomePageAdmin}
                            exact
                            component={ProductsContainerAdmin}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/admin/products/add" 
                            layout={HomePageAdmin}
                            exact
                            component={ProductsActionPage}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/admin/products/edit/:id" 
                            layout={HomePageAdmin}
                            exact
                            component={ProductsActionPage}
                        >
                        </AppRouter>
                        
                        <AppRouter
                            path="/admin/categories"
                            layout={HomePageAdmin}
                            exact
                            component={CategoriesContainer}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/admin/categories/add"
                            layout={HomePageAdmin}
                            exact
                            component={CatelogyActionPage}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/admin/categories/edit/:id"
                            layout={HomePageAdmin}
                            exact
                            component={CatelogyActionPage}
                        >
                        </AppRouter>
                        <AppRouter
                            path="/admin/accout"
                            layout={HomePageAdmin}
                            exact
                            component={AccoutContainerUser}
                        >  
                        </AppRouter>
                        <AppRouter
                            path="/admin/bill"
                            layout={HomePageAdmin}
                            exact
                            component={Order}
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
                        <AppRouter
                            path="/Registration"
                            layout={HomePage}
                            exact
                            component={RegisterPage}
                        ></AppRouter>
                        <AppRouter
                            path="/Login"
                            layout={HomePage}
                            exact
                            component={Login}
                        ></AppRouter>
                        <AppRouter
                            path="/Profile"
                            layout={HomePage}
                            exact
                            component={Profile}
                        ></AppRouter>
                        <AppRouter
                            path="/products"
                            layout={HomePage}
                            exact
                            component={LisProductView}
                        ></AppRouter>
                        <AppRouter
                            path="/about"
                            layout={HomePage}
                            exact
                            component={Abouts}
                        ></AppRouter>
                        <AppRouter
                            path=""
                            layout={HomePage}
                            exact
                            component={Error404}
                        ></AppRouter>
                        
                    </Switch>
                </Router>
            
        )
    }
}
