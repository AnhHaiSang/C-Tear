import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>WR01</td>
                <td>Rượu Vang 50 Anniversario</td>
                <td>165</td>
                <td>
                    <span className="badge badge-warning">Warning</span>
                </td>
                <td>
                    <button type="button" className="btn btn-primary mr-10">Sửa</button>
                    <button type="button" className="btn btn-secondary">Xóa</button>
                </td>
            </tr>
        )
    }
}
