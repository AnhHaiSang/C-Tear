import React from 'react';
import { Link } from 'react-router-dom';



class ListsProduct extends React.Component {
    render() {
        var { products } = this.props;
        // console.log(products.id);
        // let total;
        return (
            <div className="items1">
                <div className="card_items">
                    <Link to={`/ProductDetail/${products.id}`}>
                        <div className="items_img">
                            <img className="img_items" src={products.img} alt="product_item" />
                        </div>
                        <div className="content_items">
                            <p>{products.name}</p>
                            <h4>
                                <ul className="review">
                                    <li className="star">
                                        {this.showReview(products.review)}
                                    </li>
                                </ul>
                            </h4>     
                            <p className="price">${products.price}</p>
                            </div>
                            <p>Xem Thêm</p>                 
                    </Link>
                </div>
            </div>

        )
    }
    
    showReview(review) {
        var result = [];
        for (var i = 1; i <= review; i++) {
            result.push(<span key={i} className="fa fa-star checked"></span>)
        }
        for (var j = 1; j <= (5 - review); j++) {
            result.push(<span key={i + j} className="fa fa-star-o"></span>)
        }

        return result;
    }

}


export default ListsProduct;
