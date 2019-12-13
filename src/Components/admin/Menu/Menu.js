import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu1">Manage Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Manage Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu3">Manage Accout</a>
                </li>
            </ul>
        )
    }
}
