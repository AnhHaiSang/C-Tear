import React from 'react';
import { Link } from 'react-router-dom';



class ListsProduct extends React.Component {
    render() {
        var { products } = this.props;
        console.log(this.props.products);
        // let total;
        return (
            <Link to={`/ProductDetail/${products.id}`}>
                <div className="items_img">
                    <img className="img_items" src={products.img} alt="product_item" />
                </div>
                <div className="content-detail">
                    <div className="name-products">
                        <p>{products.name}</p>
                    </div>
                    <h3 className="div-review">
                        <ul className="review">
                            <li className="star">
                                {this.showReview(products.review)}
                            </li>
                        </ul>
                    </h3>
                    <div className="div-price">
                        <h4 className="price">${products.price}</h4>
                    </div>
                </div>
                <button className="btn btn-success">Xem Thêm</button>
            </Link>
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
