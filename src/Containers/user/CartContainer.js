import React, { Component } from 'react'
import CartDetail from '../../Components/user/cartDetail'
import CartDetailItems from '../../Components/user/cartDetailItems'
import {connect} from 'react-redux';
import { GetApiCatgories } from '../../Actions/user/ActionUser';

class CartContainer extends Component {
    componentDidMount(){
        let {match} = this.props;
        if(match) {
            let id = match.params.id;
            this.props.getCategories(id);
        }
    }
    showCartIteams(cartItems) {
        var result = null;
        if(cartItems.length > 0 ){
            result = cartItems.map((cartItems, index) => {
                return  <CartDetailItems key={index} cartItems={cartItems} />  
            });
        }
        return result;
    }
    render() {

        let {cartItems} = this.props;
        console.log(this.props);
        
        return (
            <CartDetail>
                <div className="main" style={{ marginLeft: '17%', marginRight: '17%' }}>
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
                                <th scope="col">Tổng số</th>
                                <th scope="col">XÓA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartIteams(cartItems)}
                        </tbody>
                    </table>
                    <div style={{ float: 'right' }}>
                        <button className="btn btn-dark">Tiếp tục mua hàng</button>
                        <button className="btn btn-dark">Xóa</button>
                        <button className="btn btn-dark">Cập nhật</button>
                    </div>
                </div>
            </CartDetail>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategories: (id) => {
            dispatch(GetApiCatgories(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
