import { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  onChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.firstName}, {this.state.lastName}</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.onChangeHandler}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={this.onChangeHandler}
              value={this.state.lastName}
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Header;
