import React from 'react';
import product1 from './../img/Image_Product/product1.jpg';


class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="items1">
                    <div className="card_items">
                        <div className="items_img">
                            <img className="img_items" src={product1} alt="product_item1" />
                        </div>
                        <div className="content_items">
                            <p>RƯỢU VANG ALPATAGO 100 YEARS</p>
                            <p className="price">$1000</p>
                            <p><button type="button" className="btn btn-primary">Add to Cart</button></p>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;
