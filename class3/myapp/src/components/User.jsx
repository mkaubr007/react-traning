import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
            </div>
        )
    }
}
export default User;