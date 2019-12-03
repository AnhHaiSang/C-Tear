import React from 'react';
import ContentProduct from './content_products';
import LineNewProduct from './line_newproduct';
import ListsProduct1 from './lists_product1';
import ImageProduct from './content_image';
import ListsProduct2 from './lists_product2';


class Content extends React.Component {
    render(){
        return(
            <div className="content">
                <ContentProduct />
                <LineNewProduct />
                <ListsProduct1 />
                <ImageProduct />
                <ListsProduct2 />
            </div>
        )
    }
}

export default Content;
