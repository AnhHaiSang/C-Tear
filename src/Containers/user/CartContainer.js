import React, { Component } from 'react';
import CartDetail from '../../Components/user/cartDetail';
import CartDetailItems from '../../Components/user/cartDetailItems';
import CartButton from '../../Components/user/CartButton';
import { connect } from 'react-redux';
import * as action from '../../Actions/user/ActionUser';
// import * as Messages from '../../Constants/user/Messages';

class CartContainer extends Component {
    render() {
        let { cartItems } = this.props;
    //    console.log(cartItems);
        return (
            <CartDetail>
                <div className="content_cart">
                    <h2>GIỎ HÀNG</h2>
                    <div style={{ height: '50 px' }}>
                        <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                    </div>
                    <table className="table cart" border={1}>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ẢNH</th>
                                <th scope="col">TÊN SẢN PHẨM</th>
                                <th scope="col">GIÁ</th>
                                <th scope="col" style={{ width: '100px' }}>SỐ LƯỢNG</th>
                                <th scope="col">SỐ TIỀN</th>
                                <th scope="col">XÓA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartIteams(cartItems)}
                        </tbody>
                    </table>
                    <CartButton />
                </div>
            </CartDetail>
        )
    }
    showCartIteams(cartItems) {
        var result = null;
        var { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        
        if (cartItems.length > 0) {
            result = cartItems.map((cartItems, index) => {
                return <CartDetailItems
                    key={index}
                    cartItems={cartItems}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onUpdateProductInCart={onUpdateProductInCart}
                />
            });
        }
        return result;
    }


    showTotalAmout = (cartItems) => {

        var result = null;
        if (cartItems.length > 0) {
            result = <CartDetailItems
                cartItems={cartItems}
            />
        }
        return result;
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.CartReducer
 

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        onDeleteProductInCart: (product) => {
            dispatch(action.DeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(action.actUpdateProductInCart(product, quantity));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
