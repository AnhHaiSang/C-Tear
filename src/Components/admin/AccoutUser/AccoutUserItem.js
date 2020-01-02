import React, { Component } from 'react'

export default class AccoutUserItem extends Component {
    render(){
        let { name, password, repassword, email, phone, address} = this.props.users;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{name} </td>
                <td defaultValue={password}>******</td>
                <td defaultValue={repassword}>******</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
            </tr>
        )
    }
}
