import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  addUserAPI } from '../../Actions/user/ActionUser';
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            password:'',
            re_password:'',
            email:'',
            phone:'',
            address:'',
        }
    }


    handOnChange = (e) => {
        switch (e.target.name) {
            case 'name':
                this.setState({ ...this.state, name : e.target.value })
                break;
            case 'password':
                this.setState({ ...this.state, password : e.target.value })
                break;
            case 're_password':
                this.setState({ ...this.state, re_password : e.target.value })
                break;
            case 'email':
                this.setState({ ...this.state, email : e.target.value })
                break;
            case 'phone':
                this.setState({ ...this.state, phone : e.target.value })
                break;
            case 'address':
                this.setState({ ...this.state, address : e.target.value })
                break;
            default:
                break;

        }
    }
    onSubmitUser=(e)=>{
        e.preventDefault();
        let {name,password,re_password,email,phone,address} = this.state;
        let users = {
            name,
            password,
            re_password,
            email,
            phone,
            address,
        }
        this.props.adduser(users);
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="login">
                <Link to="/login" className="btn btn-dark" style={{ float: "right" }}>ĐĂNG NHẬP</Link>
                <h2>ĐĂNG KÝ</h2>
                <div style={{ height: '50 px' }}>
                    <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                </div>
                <div style={{ width: "100%" }}>

                    <form onSubmit={this.onSubmitUser}>
                        <div>
                            <label htmlFor="name">HỌ VÀ TÊN</label>
                            <input type="text" className="form-control" name="name" placeholder="Nhập họ tên" onChange={this.handOnChange}/>
                        </div>
                        <div>
                            <label htmlFor="password">MẬT KHẨU</label>
                            <input type="password" className="form-control" id="pass"  name="password" placeholder="Nhập mật khẩu" onChange={this.handOnChange} />


                        </div>
                        <div>
                            <label htmlFor="re_password">NHẬP LẠI MẬT KHẨU</label>
                            <input type="password" className="form-control" id="re_password"  name="re_password" placeholder="Nhập mật khẩu" onChange={this.handOnChange} />


                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                                <input type="number" className="form-control" id="phone"  name="phone" placeholder="Nhập số điện thoại" onChange={this.handOnChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">EMAIL</label>
                                <input type="text" className="form-control" name="email"   placeholder="Nhập địa chỉ Email" onChange={this.handOnChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">ĐỊA CHỈ</label>
                            <input type="text" className="form-control" id="address"  name="address" placeholder="Nhập địa chỉ"  onChange={this.handOnChange}/>
                        </div>
                        {/* <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Lưu đăng nhập
                            </label>
                            </div>
                        </div> */}
                        <div className="form-group">
                            <button className="btn btn-dark " onClick={this.onSubmitUser}>ĐĂNG KÝ</button>

                            <Link to="/" className="btn btn-default">HỦY</Link>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        adduser: (users) => {
            dispatch(addUserAPI(users))
        }
    }
}

export default connect(null, mapDispatchToProps)(RegisterPage)