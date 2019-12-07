import React from 'react';
import Item from './item';
import {connect} from 'react-redux';

class List extends React.Component {
    render(){
        var showList = this.props.lisTodos.map((todo, index)=>{
            return <Item key={index} todo={todo} index={index}/>
        })
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
       lisTodos: state.todos
    }
}

export default connect(mapStateToProps, null)(List);
