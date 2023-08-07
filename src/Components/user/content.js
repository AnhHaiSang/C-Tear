import React from 'react';
import ContentProduct from './content_products';
import LineNewProduct from './line_newproduct';
import ProductsContainer from '../../Containers/user/ProductsContainer';
import Slide from './slide';


class Content extends React.Component {
    render(){
        return(
            <main className="main" id="main">
                <Slide />
                <ContentProduct />
                <LineNewProduct />
                <ProductsContainer/>
                <LineNewProduct />
                <ProductsContainer/>
            </main>
        )
    }
}

export default Content;
