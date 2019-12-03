import React from 'react';
import logo from './../img/Image_Rudu/logo.png'

class Menu extends React.Component {
    render(){
        return(
            <div className="menu">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/* Brand/logo */}
                    <a className="navbar-brand" >
                        <img src={logo} alt="logo" style={{width: '40px'}} />
                    </a>
                    {/* Links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Wine Red</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Wine White</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Wine Champagne</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >About US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Request</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Blog</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-secondary" >Sign Up/Login</button>
                        </li>
                    </ul>
                </nav>                
            </div>
        )
    }
}

export default Menu;
