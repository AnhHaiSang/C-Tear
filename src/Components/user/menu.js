import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import logo from '../../Image_Rudu/logo.png';
import giohang from '../../Image_Rudu/giohang.png';


const menu = [
  {
    name: "HOME PAGE",
    exact: true,
    to: "/",
  },
  {
    name: "RƯỢU VANG ĐỎ",
    exact: false,
    to: "/products",
  },
  {
    name: "RƯỢU TRẮNG",
    exact: false,
    to: "/products",
  },
  {
    name: "CHAMPANGE",
    exact: false,
    to: "/products",
  },
  {
    name: "THÔNG TIN",
    exact: false,
    to: "/products",
  },
  {
    name: "BLOG",
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
        // var active = match ? 'active' : '';
        return (

          <Link className="btn menu_text" to={to}>
            {label}
          </Link>

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

    sessionStorage.removeItem('TOKEN');
    this.props.history.push('/');
  }
  checklogin = (data) => {
    let result = null
    if (!data) {
      data = []
    }
    if (sessionStorage.getItem('TOKEN')) {
      return result = <span className="navbar-text">
        <Link to="/Profile" className="btn menu_text">Profile</Link>
        <button onClick={() => this.logout()} className="btn menu_text" >Đăng xuất</button>
        <button className="btn menu_text" style={{ border: "solid #fff 1px" }}>
          <Link to="/giohang" >
            <img src={giohang} style={{ width: "30px", marginRight: "2em" }} alt=""/><span style={{ fontSize: "1em", color: "white" }}>{data.length}</span>
          </Link>
        </button>
      </span >
    } else {
      return result = <span className="navbar-text" >
        <Link to={'/login'} className="btn menu_text" style={{ marginRight: "5px" }}>Đăng Nhập </Link>
        <Link to={'/Registration'} className="btn menu_text">Đăng Ký</Link>
      </span >

    }
    return result;
  }

  render() {

    var data = JSON.parse(localStorage.getItem('CART'));
    console.log(this.props);

    return (
      <header style={{ background: "#1a1a1a" }}>
        <Link className="logo" to="/">
          <img src={logo} alt="logo" style={{ width: '7em' }} />
        </Link>
        <nav className="navbar navbar-expand-lg ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <img src={logo} alt="logo" style={{ width: '8em' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">{this.showMenus(menu)}</li>
            </ul>
          </div>
        </nav>
        {this.checklogin(data)}

      </header>
    )
  }
}





export default Menu
