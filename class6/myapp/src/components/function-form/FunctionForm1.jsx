import { useState } from "react";

const Header = () => {
  const [firstName, setFirstName] = useState();

  const onChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome {firstName}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-group"
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
