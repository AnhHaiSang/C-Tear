import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OrderItem extends Component {
    render() {
        // console.log(this.props.billad.information);
        let { id, information, total } = this.props.billad;
        let {tinhtrang} = this.props.billad.information;
        var tinhtrangName = tinhtrang ? 'Đã chuyển' : 'Đang chuyển';
        var tinhtrangClass = tinhtrang ? 'warning' : 'danger';
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{information.name}</td>
                <td>{information.phone}</td>
                <td>{information.address}</td>
                <td>
                    <span className={`badge badge-${tinhtrangClass}`}>
                        {tinhtrangName}
                    </span>
                </td>
                <td>{information.ngaytao}</td>
                <td>{total}</td>
                <td>
                    <Link to={`/admin/bill/edit/${id}`} className="btn btn-primary mr-10">Sửa</Link>
                </td>
            </tr>
        )
    }
}
