import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccoutUserItem from '../../Components/admin/AccoutUser/AccoutUserItem';
import { showApiAccout } from '../../Actions/admin/ActionAdmin';

class AccoutContainerUser extends Component {
    componentDidMount() {
        this.props.showAccout();
    }
    showAccoutDb(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((users, index) => {
                return <AccoutUserItem
                    key={index}
                    users={users}
                    index={index}
                />
            });
        }
        return result;
    }
    render() {
        // console.log(this.props.AccoutAdmin);
        return (

            <div className="col-sm-9 mt-10">
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Manage Accout User</h3>
                <div className="panel panel-primary">
                    <div className="bg-primary text-white">
                        <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                            Lists Accout User
                            </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>fisrt name </th>
                                    <th>last name </th>
                                    <th>password</th>
                                    <th>re-password</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAccoutDb(this.props.AccoutAdmin)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AccoutAdmin: state.AccoutReducerAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAccout: () => {
            dispatch(showApiAccout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccoutContainerUser)