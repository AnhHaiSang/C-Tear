import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        let { id, name, img, inventory, review, description, loaispId } = this.props.products;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td style={{width:"12%"}}>{name} </td>
                <td style={{width:"20%"}}><img className="image-products-admin" src={img} alt={name}/> </td>
                <td>{inventory}</td>
                <td>{review}</td>
                <td>{description}</td>
                <td>{loaispId}</td>
                <td>
                    <Link
                        to={`/admin/products/edit/${id}`}
                        className="btn btn-primary mr-10">
                        Sửa
                    </Link>
                    <button
                        onClick={()=>this.deleteProduts(id)}
                        type="button"
                        className="btn btn-secondary">
                        Xóa
                    </button>
                </td>
            </tr>
        )
    }
    deleteProduts=(id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.delProducts(id);
        }
    }
}
