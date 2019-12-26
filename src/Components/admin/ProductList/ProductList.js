import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
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
                                        <th>name </th>
                                        <th>img </th>
                                        <th>inventory</th>
                                        <th>review</th>
                                        <th>description</th>
                                        <th>loaispId</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            

        )
    }
}
