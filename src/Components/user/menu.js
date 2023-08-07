import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faRightFromBracket, faRightToBracket, faRegistered } from '@fortawesome/free-solid-svg-icons'
import {
    Route,
    Link
} from "react-router-dom";
import logo from './../img/Image_Rudu/logo-2.png';


const menu = [
    {
        name: "Home",
        exact: true,
        to: "/",
    },
    {
        name: "Categories",
        exact: false,
        to: "/categories",
    },
    {
        name: "Products",
        exact: false,
        to: "/products",
    },
    {
        name: "Feature",
        exact: false,
        to: "/feature",
    },
    {
        name: "About",
        exact: false,
        to: "/about",
    },
    {
        name: "Contact Us",
        exact: false,
        to: "/contact",
    },


]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                var additionalClass = 'item'; // Add your additional class here
                var combinedClassName = `${active} ${additionalClass}`;

                return (
                    <li className={combinedClassName}>
                        <Link className="item-link link-to" to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};


class Menu extends React.Component {

    showMenus = (menu) => {
        var result = null;
        if (menu.length > 0) {
            result = menu.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    };
    logout = () => {
        return sessionStorage.removeItem('TOKEN');
    }
    checklogin = () => {
        if (sessionStorage.getItem('TOKEN')) {
            return (
                <React.Fragment>
                    <li className="item">
                        <Link to='cart' className="item-link link-to btn-header">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="item-link link-to btn-header">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li className="item">
                        <Link to='' onClick={this.logout} className="item-link link-to btn-header">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
                    </li>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <li className="item">
                        <Link to={'/login'} className="item-link link-to btn-header">Login</Link>
                    </li>
                    <li className="item">
                        <Link to={'/register'} className="item-link link-to btn-header">Register</Link>
                    </li>
                </React.Fragment>
            );
        }
    }


    render() {
        return (
            <div className="container">
                <div className="wrapper-navbar">
                    <div className="inner">
                        <div className="inner-left">
                            <div className="logo">
                                <Link className="link-to link-to-home" to="/">
                                    <img src={logo} alt="logo" className="img-logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="inner-right">
                            <nav className="navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ">
                                        {this.showMenus(menu)}
                                        {this.checklogin()}
                                    </ul>
                                </div>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
