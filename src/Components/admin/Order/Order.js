import React, { Component } from 'react';
import OrderItem from '../Order/OrderItem';
import { Link } from 'react-router-dom';

export default class Order extends Component {
    render() {
        return (
            
                <div className="col-sm-9 mt-10">
                    <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Manage Product</h3>
                    <Link to="/admin/categories" type="button" className="btn btn-info mb-10">Add</Link>
                    <div className="panel panel-primary">
                        <div className="bg-primary text-white">
                            <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                                Lists Product
                            </h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>id</th>
                                        <th>userID </th>
                                        <th>addess</th>
                                        <th>status ship</th>
                                        <th>created at</th>
                                        <th>total price</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <OrderItem />
                                    <OrderItem />
                                    <OrderItem />
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            

        )
    }
}
