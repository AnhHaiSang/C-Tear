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
                        <Link className="menu_items btn btn-dark" to={to}>
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
        // console.log(sessionStorage.getItem('TOKEN'))
        let result = null
        if (sessionStorage.getItem('TOKEN')) {
            return result = <li className="nav-item" >
                <Link className="btn">Profile /</Link>
                <Link to='' onClick={this.logout} className="btn" >Đăng xuất</Link>
            </li >
        } else {
            return result = <li className="nav-item ">
                <Link to={'/login'} className="btn btn-dark" >Đăng Nhập </Link>

                <Link to={'/Registration'} className="btn  btn-dark">Đăng Ký</Link>
            </li >
            // confirm("Ban chua dang nhap");
        }

    }

    render() {
        return (
            <div>



                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ width: '40px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            {this.showMenus(menu)}
                            <li className="width200"></li>
                            {this.checklogin()}
                        </ul>

                    </div>

                </nav>

            </div>
        )
    }
}

export default Menu;
