import React, { Component } from 'react'

export default class CartDetailItems extends Component {
    render() {
        console.log(this.props.cartItems);
        let {img,name,price,soluong} = this.props.cartItems.product
        return (
            <tr>
                <th scope="row">
                    <img src={img} className='img-fuilt' alt=""/>
                </th>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <button>+</button>
                    <input defaultValue={soluong} />
                    <button>-</button>
                </td>
                <td>{price}</td>
                <td></td>
            </tr>
        )
    }
}
