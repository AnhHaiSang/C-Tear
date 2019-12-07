import React from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/todo_actions';


class Item extends React.Component {
    render(){
        let {id, name} = this.props.todo
        return(
            <tr>
                <th scope="row">{this.props.index+1}</th>
                <td>{name}</td>
                 <td>
                    <button onClick={()=>this.props.handlerDelete(id)} id={this.props.index} type="button" className="btn btn-outline-danger">Delete</button>
                    <button onClick={()=>this.props.handlerEdit(id)} type="button" className="btn btn-outline-warning">Edit</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handlerDelete: (id_todo)=>{
            dispatch(action.delete_todo(id_todo));
        },
        handlerEdit: (id_todo)=>{
            dispatch(action.edit_todo(id_todo));
        }
    }
}

export default connect(null, mapDispatchToProps)(Item);
