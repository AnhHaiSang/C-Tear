import React, { Component } from 'react';
import {
    Route,
    Link
} from "react-router-dom";

const MenuAdmin = [
    {
        name: "Home Admin",
        exact: true,
        to: "/admin",
    },
    {
        name: "Manage Category",
        exact: false,
        to: "/admin/categories",
    },
    {
        name: "Manage Product",
        exact: false,
        to: "/admin/productlist",
    },
    {
        name: "Manage Accout",
        exact: false,
        to: "/admin/accout",
    },
    {
        name: "Manage Bill",
        exact: false,
        to: "/admin/bill",
    }
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
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>

                    </li>
                )
            }} />
    )
}

export default class Menu extends Component {
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
    }
    render() {
        return (

            <ul className="nav flex-column">
                {this.showMenus(MenuAdmin)}
            </ul>

        )
    }
}
