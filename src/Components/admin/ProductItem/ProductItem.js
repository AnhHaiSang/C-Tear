import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>STT</td>
                <td>name </td>
                <td>img </td>
                <td>inventory</td>
                <td>review</td>
                <td>description</td>
                <td>loaispId</td>
                <td>
                    <button type="button" className="btn btn-primary mr-10">Sửa</button>
                    <button type="button" className="btn btn-secondary">Xóa</button>
                </td>
            </tr>
        )
    }
}
