import React, { Component } from 'react'
import CartDetail from '../../Components/user/cartDetail'
import CartDetailItems from '../../Components/user/cartDetailItems'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DelToCart, addOrderAPI, getprofileAPI } from '../../Actions/user/ActionUser';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            address: '',
            phone: '',
            tinhtrang: '',

        }
    }
    handOnChange = (e) => {
        switch (e.target.name) {
            case 'name':
                this.setState({ ...this.state, name: e.target.value })
                break;
            case 'address':
                this.setState({ ...this.state, address: e.target.value })
                break;
            case 'phone':
                this.setState({ ...this.state, phone: e.target.value })
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        let data = sessionStorage.getItem('TOKEN');
        this.props.getuserprofle(data);
    }

    showCartIteams(cartItems) {
        var result = null;
        let { delcart } = this.props
        if (cartItems.length > 0) {
            result = cartItems.map((cartItems, index) => {
                return <CartDetailItems key={index} cartItems={cartItems} delcart={delcart} />
            });
        } else {
            result = <tr>
                <td colSpan={6}><h1>Bạn không có sản phẩm nào</h1></td>
                
            </tr>
        }
        return result;

    }
    onBill = (e) => {
        e.preventDefault();
        let { id, name, address, phone, tinhtrang } = this.state;

        let { cartItems, addbill, history } = this.props;
        let ngaytao = new Date();
        let email = sessionStorage.getItem('TOKEN');
        let total = this.showTotal(cartItems);
        let information = {
            email,
            name,
            address,
            phone,
            ngaytao,
            tinhtrang
        };
        let bill = {
            id,
            information,
            cartItems,
            total,
        }
        addbill(bill);
        localStorage.removeItem('CART');
        history.push('/');
    }
    showTotal(cart) {
        let total = null;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].count
            }
        }
        return total;
    }
    checklogin = () => {
        // console.log(sessionStorage.getItem('TOKEN'))
        let result = null
        let { history } = this.props;
        if (sessionStorage.getItem('TOKEN')) {
            result = "#myModal"
        } else {
            history.push('/login');
        }
        return result;
    }
    ShowProfile = (users) => {
        let { cartItems } = this.props;
        let result = null;
        if (users.length > 0) {
            result = users.map((item, index) => {
                return (<div className="modal fade" id="myModal" role="dialog" key={index} >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">BILL</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>

                            </div>
                            <form onSubmit={this.onBill}>
                                <div className="modal-body">
                                    <div className="container">

                                        <div>
                                            <label htmlFor="name">HỌ VÀ TÊN</label>
                                            <input type="text" className="form-control" name="name" placeholder="Nhập họ tên" onChange={this.handOnChange} defaultValue={item.name} />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                                                <input type="number" className="form-control" id="phone" name="phone" placeholder="Nhập số điện thoại" onChange={this.handOnChange} defaultValue={item.phone} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="email">HÌNH THỨC THANH TOÁN</label>
                                                <select className="form-control" id="" name="" disabled="disabled">
                                                    <option>Thanh toán khi nhận hàng</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">ĐỊA CHỈ</label>
                                            <input type="text" className="form-control" id="address" name="address" placeholder="Nhập địa chỉ" onChange={this.handOnChange} defaultValue={item.address} />
                                        </div>
                                        <div className="form-group" style={{ float: "right" }}>
                                            <p>Tổng Tiền: <span className="text-danger">{this.showTotal(cartItems)}$</span> </p>
                                        </div>

                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-dark" >THANH TOÁN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                )
            });
        }
        return result;
    }
    render() {

        let { cartItems, history, profile } = this.props;
        return (
            <CartDetail>
                <div className="main" >
                    <h2>GIỎ HÀNG</h2>
                    <div>
                        <p>Tổng Tiền:  {this.showTotal(cartItems)}$</p>
                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target={this.checklogin()}>Thanh Toán</button>
                        <Link to="/" className="btn btn-dark">Tiếp tục mua hàng</Link>
                        <button className="btn btn-dark">Xóa Hết</button>
                    </div>
                    <div style={{ height: '50 px' }}>
                        <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                    </div>
                    <table className="table cart" border={1}>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" style={{width:"25%"}}>ẢNH</th>
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

                    {this.ShowProfile(profile)}


                </div>
            </CartDetail>
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.CartReducer,
        profile: state.ProfileReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delcart: (cartItems) => {
            dispatch(DelToCart(cartItems))
        },
        getuserprofle: (value) => {
            dispatch(getprofileAPI(value))
        },
        addbill: bill => {
            dispatch(addOrderAPI(bill))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
