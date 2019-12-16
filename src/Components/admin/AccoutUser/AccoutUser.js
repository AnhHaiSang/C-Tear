import React, { Component } from 'react';
import AccoutUserItem from '../AccoutUser/AccoutUserItem';
// import { Link } from 'react-router-dom';

export default class AccoutUser extends Component {
    render() {
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
                                    <AccoutUserItem />
                                    <AccoutUserItem />
                                    <AccoutUserItem />
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            

        )
    }
}
