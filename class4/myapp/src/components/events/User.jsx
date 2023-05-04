const { Component } = require("react");

class User extends Component {
    constructor(){
        super();
        this.state = {
            firstName : 'Guest'
        }
        this.onClickHandler = this.onClickHandler.bind();
    }

    onClickHandler = () => {
        this.setState ({
            firstName : 'Jone'
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.firstName}</h1>
                <button onClick={this.onClickHandler}>Update</button>
            </div>
        )
    }
}
export default User;