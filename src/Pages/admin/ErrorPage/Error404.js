import React, { Component } from 'react';
import Error from '../../../Image_Rudu/page_404.jpg';

export default class Error404 extends Component {
    render() {
        return (
            <div className="error">
                <img src={Error} className="img-fluid" alt="Error 404"/>>
            </div>
        )
    }
}
