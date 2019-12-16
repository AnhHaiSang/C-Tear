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
import ProductList from '../Components/admin/ProductList/ProductList';
import CatelogyActionPage from '../Pages/admin/CatelogyActionPage/CatelogyActionPage';
import CategoriesContainer from '../Containers/admin/CategoriesContainer';
import ChartAdmin from '../Components/admin/ChartAdmin/ChartAdmin';
import AccoutUser from '../Components/admin/AccoutUser/AccoutUser';
import Order from '../Components/admin/Order/Order';



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
                            component={ProductList}
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
                            path="/admin/accout"
                            layout={HomePageAdmin}
                            exact
                            component={AccoutUser}
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
                            path=""
                            layout={Error404}
                            exact
                            component
                        ></AppRouter>
                    </Switch>
                </Router>
            
        )
    }
}
