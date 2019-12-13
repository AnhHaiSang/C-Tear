import React from 'react';


class ProductDetail extends React.Component {
    render() {
        // console.log(this.props.children);
        return (
            <div className="product_lists">
                <ul className="flex-wrap">
                    {this.props.children}
                </ul>
            </div>
        )
    }


}

export default ProductDetail;
