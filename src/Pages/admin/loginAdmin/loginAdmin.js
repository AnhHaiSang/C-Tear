import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetAcoutAdmin } from '../../../Actions/admin/ActionAdmin';

class loginAdmin extends Component {
    constructor(props) {
        super(props)
        this.admin = React.createRef();//lay value cua input va check value cua input
        this.pass = React.createRef();
    }
    componentDidMount() {
        this.props.getAccoutAdmin();
    }
    onLogin = (e) => {
        e.preventDefault()
    }
    render() {
        console.log(this.props.Admin);
        return (
            <form className="form-login-admin" onSubmit={this.onLogin}>
                <h4>Login Admin</h4>
                <div className="input-group mb-3 pr">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Admin</span>
                    </div>
                    <input 
                    ref={this.admin}
                    type="text" 
                    className="form-control"/>
                </div>
                <div className="input-group mb-3 pr">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Password</span>
                    </div>
                    <input 
                    ref={this.pass}
                    type="password" 
                    className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Admin: state.LoginAdminReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAccoutAdmin: () => {
            dispatch(actGetAcoutAdmin())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginAdmin)