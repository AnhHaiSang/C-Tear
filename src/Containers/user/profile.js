import React from 'react';
import { connect } from 'react-redux';
import { getprofileAPI, GetbillAPI } from '../../Actions/user/ActionUser';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    componentDidMount() {
        this.props.getapiprofile(sessionStorage.getItem('TOKEN'));//didmount get gia tri cua function tu sessionStorge
        this.props.getbill(sessionStorage.getItem('TOKEN'))
    }
    showproduct = (product) => {
        let result = product.map((item, index) => {
            return (<tr key={index}>
                <td>{item.product.name}</td>
                <td>{item.count}</td>
                <td>{item.product.price * item.count}</td>
            </tr>)
        });
        return result;
    }
    showbill = (bill) => {
        let result = null;
        if (bill.length > 0) {
            result = bill.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.information.name}</td>
                        <td>{item.information.address}</td>
                        <td>{item.information.phone}</td>
                        <td>{item.information.ngaytao}</td>
                        <td style={{ padding: 0, margin: 0 }} >
                            <tr >
                                <td style={{ width: "100%" }}>Tên sản phẩm</td>
                                <td>Số lượng</td>
                                <td >Giá</td>
                            </tr>
                            {this.showproduct(item.cartItems)}
                        </td>
                        <td>{item.total}</td>
                <td>{item.information.tinhtrang}</td>
                    </tr>
                )
            })
        } else {return result=<td colSpan={8}>Bạn chưa mua hàng <Link style={{color:"black"}}to="/">Click vào đây để mua hàng</Link></td>}
        return result;
    }
    showprofile = (profile) => {
        let result = null;
        if (profile.length > 0) {
            result = profile.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <label htmlFor="name">HỌ VÀ TÊN</label>
                            <input type="text" className="form-control" name="name" placeholder="Nhập họ tên" value={item.name} />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                                <input type="number" className="form-control" id="phone" name="phone" placeholder="Nhập số điện thoại" onChange={this.handOnChange} value={item.phone} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">EMAIL</label>
                                <input type="text" className="form-control" name="email" placeholder="Nhập địa chỉ Email" onChange={this.handOnChange} value={item.email} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">ĐỊA CHỈ</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="Nhập địa chỉ" onChange={this.handOnChange} value={item.address} />
                        </div>
                    </div>
                )
            })
        }
        return result;
    }
    render() {
        let { profile, bill } = this.props
        console.log(this.props.bill);

        return (
            <div className="login">
                <div>
                    <h2>Thông tin tài khoản</h2>
                    <div style={{ height: '50 px' }}>
                        <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                    </div>
                </div>
                {this.showprofile(profile)}
                <hr></hr>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="profiletext">
                            <th scope="col">Số thứ tự</th>
                            <th scope="col">Tên người nhận</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Ngày mua</th>
                            <th scope="col" >Sản phẩm</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Tình trạng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showbill(bill)}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.ProfileReducer,
        bill: state.BillReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getapiprofile: (value) => {
            dispatch(getprofileAPI(value))
        },
        getbill: (value) => {
            dispatch(GetbillAPI(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
