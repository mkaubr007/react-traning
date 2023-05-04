import React, { Component } from 'react';

class Students extends Component {
    render() {
        return (
            <div>
                 <h1>Name: {this.props.id}</h1>
                <h1>Name: {this.props.name}</h1>
            </div>
        )
    }
}
export default Students;