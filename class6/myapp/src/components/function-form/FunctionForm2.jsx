import React, { useState } from "react";
const Header = () => {
  const [ user, setUser ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const onChangeHander = (event) => {
    setUser({
        ...user,
        [ event.target.name ]: event.target.value
    })
  };

  return (
    <div>
      <h1>Welcome {user.firstName}, { user.lastName }</h1>
      <form>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={onChangeHander}
            value={user.firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={onChangeHander}
            value={user.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={onChangeHander}
            value={user.email}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
