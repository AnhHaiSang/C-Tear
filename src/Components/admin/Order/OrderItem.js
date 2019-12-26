import React, { Component } from 'react'

export default class OrderItem extends Component {
    render() {
        return (
            <tr>
                <td>STT</td>
                <td>id</td>
                <td>userID </td>
                <td>addess</td>
                <td>status ship</td>
                <td>created at</td>
                <td>total price</td>
                <td>
                    <button type="button" className="btn btn-primary mr-10">Sửa</button>
                    <button type="button" className="btn btn-secondary">Xóa</button>
                </td>
            </tr>
        )
    }
}
