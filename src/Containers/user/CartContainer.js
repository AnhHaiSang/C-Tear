import React, { Component } from 'react'
import CartDetail from '../../Components/user/cartDetail'
import CartDetailItems from '../../Components/user/cartDetailItems'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { DelToCart } from '../../Actions/user/ActionUser';

class CartContainer extends Component {
    
    showCartIteams(cartItems) {
        var result = null;
        let {delcart} = this.props
        if(cartItems.length > 0 ){
            result = cartItems.map((cartItems, index) => {
                return  <CartDetailItems key={index} cartItems={cartItems} delcart={delcart} />  
            });
        }
        return result;
    }
    showTotal(cart){
        let total = null;
        if(cart.length > 0) {
            for(var i=0;i<cart.length;i++){
                total += cart[i].product.price*cart[i].count
            }
        }
        return total;
    }
    render() {

        let {cartItems} = this.props;
        // console.log(this.props.cartItems);
        
        return (
            <CartDetail>
                <div className="dangky" >
                    <h2>GIỎ HÀNG</h2>
                    <div>
                        <p>Tổng Tiền:  {this.showTotal(cartItems)}$</p>
                        <button className="btn btn-dark">Thanh Toán</button>
                        <Link to="/"className="btn btn-dark">Tiếp tục mua hàng</Link>
                        <button className="btn btn-dark">Xóa Hết</button>
                    </div>
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
                                <th scope="col">THÀNH TIỀN</th>
                                <th scope="col">XÓA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartIteams(cartItems)}
                        </tbody>
                    </table>
                    
                   
                        
            
                </div>
            </CartDetail>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.CartReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delcart: (cartItems) => {
            dispatch(DelToCart(cartItems))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
