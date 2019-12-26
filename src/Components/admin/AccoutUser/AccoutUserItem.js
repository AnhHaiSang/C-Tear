import React, { Component } from 'react'

export default class AccoutUserItem extends Component {
    render(){
        let { fisrtname, lastname, password, repassword, email, phone, address} = this.props.users;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{fisrtname} </td>
                <td>{lastname}</td>
                <td defaultValue={password}>******</td>
                <td defaultValue={repassword}>******</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
            </tr>
        )
    }
}
