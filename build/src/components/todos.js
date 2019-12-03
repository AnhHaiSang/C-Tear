import React from 'react';
import Form from './form';
import List from './list';
import axios from 'axios';


class Todos extends React.Component {
    constructor(){
        super();
        this.state = {
            list_todo: [],
            text: "",
            edit_id: ""
        }
    }

    render(){
        return(
            <div>
                <div className="pricing-header text-center">
                    <h2 className="display-4">TODO LIST APP</h2>
                    <p className="lead">Management TODO LIST</p>
                </div>
                <Form/>
                <List/>
            </div>
        )
    }
}

export default Todos;
