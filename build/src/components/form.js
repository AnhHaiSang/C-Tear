import React from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/todo_actions';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "", 
            prevPropsTodoID: "",
            is_update: false
        }
    }

    handlerChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handlerText(){
        this.setState({
            text: ""
        })
    }

    static getDerivedStateFromProps(props, state){
       if(props.todo&&(props.todo.id != state.prevPropsTodoID)){
           return {
               text: props.todo.name,
               prevPropsTodoID: props.todo.id,
               is_update: true
        }
       }
        return null;
    }

    handlerSubmit(e){
        e.preventDefault();
        this.handlerText();
        if(!this.state.is_update){
            console.log("Created!");
        } else {
            this.props.handlerUpdate({
                id: this.state.prevPropsTodoID,
                text: this.state.text
            });
            this.setState({
                is_update: false
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handlerSubmit.bind(this)} className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">Password</label>
                        <input onChange={this.handlerChange.bind(this)} value={this.state.text} type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
       todo: state.todoEdit
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handlerUpdate: (todo)=>{
            dispatch(action.update_todo(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
