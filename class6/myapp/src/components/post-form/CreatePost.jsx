import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [user, setUser] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const onChangeHander = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let post = {
      userId: user.userId,
      title: user.title,
      body: user.body

    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>
        Welcome {user.title}
      </h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">UserId</label>
          <input
            type="text"
            name="userId"
            className="form-control"
            onChange={onChangeHander}
            value={user.userId}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={onChangeHander}
            value={user.title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Body</label>
          <input
            type="text"
            name="body"
            className="form-control"
            onChange={onChangeHander}
            value={user.body}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default CreatePost;
