import React from 'react';
import title_dark from './../img/Image_Rudu/title_dark.png';

class LineNewProduct extends React.Component {
    render(){
        return(
            <div className="LineNewProduct">
                <h3>SẢN PHẨM MỚI</h3>
                <img src={title_dark} alt="title-dark"></img>              
            </div>
        )
    }
}

export default LineNewProduct;
