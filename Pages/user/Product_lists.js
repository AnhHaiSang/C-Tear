import React from 'react';
import Products from '../../Components/user/Products'

class ProductLists extends React.Component {
    render() {
        return (
            <div className="product_lists">
                <ul className="d-flex flex-wrap">
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                    <li className="list-group-item">
                        <Products/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProductLists;
