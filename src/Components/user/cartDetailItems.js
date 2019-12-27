import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CartDetailItems extends Component {

    render() {
        console.log(this.props);
        let { product, count } = this.props.cartItems
        let { cartItems } = this.props

        return (
            <tr className="text--align__center">
                <th scope="row">
                    <img src={product.img} className="width__100" alt="" />
                </th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {count}
                </td>
                <td>{this.showMoney(product.price, count)}</td>
                <td>
                    <button onClick={() => this.delete(cartItems)} className="btn btn-dark">Xóa</button>
                </td>
            </tr>
        )
    }
    delete(cartItems) {
        let result = false;
        if (confirm("bạn có muốn xóa ko???"//eslint-disable-line
        )) {
            return result = this.props.delcart(cartItems);
        }
        else {
            return result
        }


    }
    showMoney(price, count) {
        var result = price * count;
        return result
    }
}
