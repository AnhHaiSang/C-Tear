import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserAPI } from '../../Actions/user/ActionUser';
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            re_password: '',
            email: '',
            phone: '',
            address: '',
            //message Error v
            nameError: 'Nhập họ và tên',
            emailError: "Nhập email",
            passwordError: "Nhập lại mật khẩu",
            re_passwordError: "Nhập lại mật khẩu",
            phoneError: "Nhập số điện thoại",
            addressError: "Nhập địa chỉ",
            //trang thai
            class_status_name: '',
            class_status_password: '',
            class_status_re_password: '',
            class_status_email: 'form-group col-md-6',
            class_status_phone: 'form-group col-md-6',
            class_status_address: '',
            //trang thai con
            class_child_name: 'form-control',
            class_child_password: 'form-control',
            class_child_re_password: 'form-control',
            class_child_email: 'form-control',
            class_child_phone: 'form-control',
            class_child_address: 'form-control',
        }
    }


    handOnChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    }
    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let re_passwordError = "";
        let phoneError = "";
        let addressError = "";
        //validate phone mã Việt Nam
        // var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        // var mobile = this.state.phone;
        // if (mobile !== '') {
        //     if (vnf_regex.test(mobile) == false) {
        //         phoneError="Số điện thoại của bạn không đúng định dạng!";
        //     } else {
        //         phoneError="Số điện thoại của bạn hợp lệ!";
        //     }
        // } else {
        //     phoneError="Bạn chưa điền số điện thoại!";
        // }

        if (!this.state.name) {
            nameError = "Vui lòng nhập lại tên";
            this.setState({
                class_child_name: 'form-control is-invalid'
            })
        } else {
            this.setState({
                class_status_name: 'was-validated'
            })
        }
        if (!this.state.password) {
            passwordError = "Vui lòng nhập lại mật khẩu";
            this.setState({
                class_child_password: 'form-control is-invalid',
            })
        } else {
            this.setState({
                class_status_password: 'was-validated'
            })
        }
        if ((this.state.re_password !== this.state.password) || this.state.re_password === "") {
            re_passwordError = "Vui lòng nhập lại mật khẩu";
            this.setState({
                class_child_re_password: 'form-control is-invalid',
            })
        } else {
            this.setState({
                class_status_re_password: 'was-validated'
            })
        }
        if (!this.state.phone) {
            phoneError = "Vui lòng nhập lại số điện thoại"
            this.setState({
                class_child_phone: 'form-control is-invalid'
            })

        } else {
            this.setState({
                class_status_phone: 'form-group col-md-6 was-validated'
            })
        }
        if (!this.state.email.includes("@")) {
            emailError = "Vui lòng nhập lại email";
            this.setState({
                class_child_email: 'form-control is-invalid'
            })

        } else {
            this.setState({
                class_status_email: 'form-group col-md-6 was-validated'
            })
        }
        if (!this.state.address) {
            addressError = "Vui lòng nhập địa chỉ"
            this.setState({
                class_child_address: 'form-control is-invalid'
            })

        } else {
            this.setState({
                class_status_address: 'was-validated'
            })
        }
        if (emailError || nameError || passwordError || re_passwordError || phoneError || addressError) {
            this.setState({ emailError, nameError, passwordError, re_passwordError, phoneError, addressError });
            return false;
        }


        return true;
    };
    onSubmitUser = (e) => {
        e.preventDefault();
        let { name, password, re_password, email, phone, address } = this.state;
        let users = {
            name,
            password,
            re_password,
            email,
            phone,
            address,
        }
        const isValid = this.validate();
        if (isValid) {
            this.props.adduser(users);
            this.props.history.push('/login');
        }

    }

    render() {
        return (
            <div className="login">
                <h2>ĐĂNG KÝ</h2>
                <div style={{ height: '50 px' }}>
                    <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                </div>
                <div style={{ width: "100%" }}>
                    <form onSubmit={this.onSubmitUser}>
                        <div className={this.state.class_status_name}>
                            <label htmlFor="name">HỌ VÀ TÊN</label>
                            <input
                                type="text"
                                className={this.state.class_child_name}
                                name="name"
                                id="name"
                                placeholder={this.state.nameError}
                                onChange={this.handOnChange}
                                value={this.state.name} />

                        </div>
                        <div className={this.state.class_status_password}>
                            <label htmlFor="password">MẬT KHẨU</label>
                            <input
                                type="password"
                                className={this.state.class_child_password}
                                id="pass"
                                name="password"
                                placeholder={this.state.passwordError}
                                onChange={this.handOnChange}
                            />
                        </div>
                        <div className={this.state.class_status_re_password}>
                            <label htmlFor="re_password">NHẬP LẠI MẬT KHẨU</label>
                            <input type="password"
                                className={this.state.class_child_re_password}
                                id="re_password"
                                name="re_password"
                                placeholder={this.state.re_passwordError}
                                onChange={this.handOnChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className={this.state.class_status_phone}>
                                <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                                <input
                                    type="number"
                                    className={this.state.class_child_phone}
                                    id="phone" name="phone"
                                    placeholder={this.state.phone}
                                    onChange={this.handOnChange}
                                />
                            </div>
                            <div className={this.state.class_status_email}>
                                <label htmlFor="email">EMAIL</label>
                                <input
                                    type="email"
                                    className={this.state.class_child_email}
                                    name="email" placeholder={this.state.emailError}
                                    onChange={this.handOnChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">ĐỊA CHỈ</label>
                            <input type="text"
                                className={this.state.class_child_address}
                                id="address"
                                name="address"
                                placeholder={this.state.addressError}
                                onChange={this.handOnChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn menu_text " onClick={this.onSubmitUser}>ĐĂNG KÝ</button>

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