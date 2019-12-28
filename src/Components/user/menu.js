import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import logo from '../../Image_Rudu/logo.png';


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
         
            <Link className="menu_items btn btn-dark" to={to}>
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
    
    return sessionStorage.removeItem('TOKEN');

  }
  checklogin = () => {
    // console.log(sessionStorage.getItem('TOKEN'))
    let result = null
    if (sessionStorage.getItem('TOKEN')) {
      return result = <span className="navbar-text">
        <Link to="/giohang">abc</Link>
        <Link to="/Profile"className="btn btn-dark">Profile</Link>
        <span style={{height:"100%",color:"white"}}>|</span>
        <Link onClick={this.logout} className="btn btn-dark" >Đăng xuất</Link>
      </span >
    } else {
      return result = <span className="navbar-text">
        <Link to={'/login'} className="btn btn-dark" >Đăng Nhập </Link>
        <Link to={'/Registration'} className="btn  btn-dark">Đăng Ký</Link>
      </span >
        confirm("Ban chua dang nhap"); //eslint-disable-line
    }
    return result;
  }

  render() {
    return (
      <header className="bg-dark">
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
        {this.checklogin()}
      </header>
    )
  }
}

export default Menu;
