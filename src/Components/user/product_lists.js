import React from 'react';
// import product1 from './../img/Image_Product/product1.jpg';

class ProductLists extends React.Component {
    render() {

        return (
            <div className="product_lists">
                <ul className="flex-wrap">
                    {this.props.children}
                </ul>
            </div>
        )
    }


}

export default ProductLists;
