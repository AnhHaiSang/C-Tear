import React, { Component } from 'react';

export default class CartDetailItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity:1
        }
    };
    render() {
        let { img, name, price} = this.props.cartItems.product;
        let { cartItems } = this.props;
        return (
            <tr>
                <th scope="row" className="th_img">
                    <img src={img} className='img-fuilt' alt="" />
                </th>
                <td>{name}</td>
                <td>${price}</td>
                <td className="td_quantity">
                    <button
                        className="btn btn-info push"
                        onClick={() => this.onUpdateQuantity(cartItems, this.state.quantity + 1)}
                    >+</button>
                    <input
                        type="text"
                        className="w3-input w3-border"
                        value={this.state.quantity}
                        onChange={()=>{}}
                        />
                    <button
                        className="btn btn-info minus"
                        onClick={() => this.onUpdateQuantity(cartItems,  this.state.quantity - 1)}
                    >-</button>
                </td>
                <td>
                    {this.showTotalAmout(cartItems)}
                </td>
                <td>
                    <button
                        className="btn btn-info"
                        onClick={() => this.onDelete(cartItems)}
                    >
                        X
                    </button>
                </td>

            </tr>

        ) 
    }

    onUpdateQuantity = (cartItems, quantity) => {
        // console.log(quantity);
        
        if (quantity > 0) {
            var {onUpdateProductInCart} = this.props;
            this.setState({
                quantity: quantity
            });
            onUpdateProductInCart(cartItems, quantity)
        }
    }

    showTotalAmout = (cartItems) => {
        var total = 0;
        if (cartItems.length > 0) {
            for (let i = 0; i < cartItems.length; i++) {
                total += cartItems[i].product.price * cartItems[i].product.quantity;
            }
        }
        return total;
    }
    onDelete = (cartItems) => {
        // console.log(cartItems);
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(cartItems);
    }
}