//with JSX
// const Hello = () => {
//     return(
//         <div>
//             <h1>Welcome User</h1>
//         </div>
//     )
// }

//without JSX
// import React from 'react'
// const Hello = () => {
//     return React.createElement(
//         'div',
//         null,
//         React.createElement(
//             'h1',
//             null,
//             'Welcome User'
//         )
//     )
// }

//Using State
import React, { Component } from "react";
class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "Guest",
      email: "guest@gmail.com",
    };
  }

  onClickHandler = () => {
    this.setState({
      name: "Jone",
      email: "j@gmail.com",
    });
  };
  render() {
    return (
      <div>
        <h1>
          Welcome {this.state.name}, {this.state.email}
        </h1>
        <button onClick={this.onClickHandler}>Login</button>
      </div>
    );
  }
}

export default Hello;
