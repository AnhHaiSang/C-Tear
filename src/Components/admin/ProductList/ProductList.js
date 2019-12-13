import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem'

export default class ProductList extends Component {
    render() {
        return (
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
                                <th>Mã </th>
                                <th>Tên </th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                           <ProductItem/>
                           <ProductItem/>
                           <ProductItem/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
