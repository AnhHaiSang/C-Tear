import React, { Component } from 'react';


class CategoriesItem extends Component {
      render() {
        console.log(this.props.categories.id);
        
        let {id, name, status } = this.props.categories;
        var statusName = status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{name}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary mr-10">
                        Sửa
                    </button>
                    <button
                        onClick={this.delete(id)}
                        type="button"
                        className="btn btn-secondary">
                        Xóa
                    </button>
                </td>
            </tr>
        )
    }
    delete(id){
        this.props.delCategories(id)
    }
}



export default CategoriesItem;