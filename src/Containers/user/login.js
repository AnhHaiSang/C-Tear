import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetUserApi } from '../../Actions/user/ActionUser';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    componentDidMount() {
        this.props.getuser()
        // console.log(this.props.getuser);
        
    }
    handOnChange = (e) => {
        switch (e.target.name) {
            case 'password':
                this.setState({ ...this.state, password: e.target.value })
                break;
            case 'email':
                this.setState({ ...this.state, email: e.target.value })
                break;
            default:
                break;
        }
    }

    doLogin(loginData) {
        const email = loginData.hasOwnProperty('email') ? loginData['email'] : '';
        const password = loginData.hasOwnProperty('password') ? loginData['password'] : '';
        // console.log(email);
        // console.log(password);

        let { users, history } = this.props;
        users.forEach(eachRow => {
            if (email === eachRow['email'] && password === eachRow['password']) {
                console.log('abc');
                
                if (localStorage.getItem('HISTORY')) {
                    history.push(localStorage.getItem('HISTORY'));
                    sessionStorage.setItem('TOKEN', email);
                } else {
                    history.push('/');
                    sessionStorage.setItem('TOKEN', email);
                }
            }
        });
        return 'Incorrected'
    }

    onLogin = () => {
        let erro = '';
        Object.keys(this.state).forEach(k => {
            if (!this.state['' + k]) {
                erro = k + 'is required';
            }
        })
        if (erro) {
            //messs
        } else {
           let reslogin = this.doLogin(this.state);
           if(reslogin){
               console.log('def');
               
           }
        }
    }


    render() {
        console.log(this.state); 

        return (
            <div className="login">
                <h2>ĐĂNG NHẬP</h2>
                <div style={{ height: '50 px' }}>
                    <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
                </div>
                <div>
                    <form className="form-horizontal" onSubmit={()=>this.onLogin()}>
                        <div className='form-group'>
                            <label htmlFor="email">EMAIL:</label>
                            <div>
                                <input type="text" className='form-control' id="email" placeholder="Nhập địa chỉ email" name="email" onChange={this.handOnChange} />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">MẬT KHẨU:</label>
                            <div>
                                <input type="password" className='form-control' id="password" placeholder="Nhập mật khẩu" name="password" onChange={this.handOnChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <button type="submit" className="btn menu_text" >Đăng nhập</button>
                                <Link to="/" className="btn btn-default">HỦY</Link>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.UserReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getuser: () => {
            dispatch(GetUserApi())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)