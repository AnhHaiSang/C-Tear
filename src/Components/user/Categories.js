import React, { Component } from 'react'


export default class Categories extends Component {
    render() {
        // console.log(this.props.item);
        let { item } = this.props;
        return (
            <td>
                <a href={`/ProductDetail/${item.id}`}>
                    <div>
                        <img className="width__100" src={item.img} alt="No IMG" />
                    </div>
                    <div className="content_items">
                        <p>{item.name}</p>
                        <h4>
                            <ul className="review">
                                <li className="star">
                                    {this.showReview(item.review)}
                                </li>
                            </ul>
                        </h4>
                        <p className="price">${item.price}</p>
                    </div>


                </a>
            </td>

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
