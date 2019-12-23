import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 
class CategoriesItem extends Component {
      render() {
        let {id, name, status } = this.props.categories;
        var statusName = status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = status ? 'warning' : 'danger';
        
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{name}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td> 
                    <Link 
                        to={`/admin/categories/edit/${id}`}
                        className="btn btn-primary mr-10">
                        Sửa
                    </Link>
                    <button
                        onClick={()=>this.delete(id)}
                        type="button"
                        className="btn btn-secondary">
                        Xóa
                    </button> 
                </td>
            </tr>
        )
    }
    delete=(id)=>{
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.delcategories(id);
        }
    }
  
}



export default CategoriesItem;