import React from 'react';
import {
    Route,
    Link
} from "react-router-dom";
import logo from './../img/Image_Rudu/logo.png';


const menu = [
    {
        name: "Home Page",
        exact: true,
        to: "/",
    },
    {
        name: "Sản Phẩm",
        exact: false,
        to: "/products",
    },
    {
        name: "About",
        exact: false,
        to: "/about",
    },


]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link className="menu_items" to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }} />


    )
}

class Menu extends React.Component {
    showMenus = (menu) => {
        var result = null;
        if (menu.length > 0) {
            result = menu.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return result;
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/* Brand/logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ width: '40px' }} />
                    </Link>
                    {/* Links */}
                    <ul className="navbar-nav">
                        {this.showMenus(menu)}
                    </ul>
                    <Link className="floatR navbar-brand cart--img"to="/giohang"></Link>
                </nav>
            </div>
        )
    }
}

export default Menu;
