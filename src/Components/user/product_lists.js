import React from 'react';

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
