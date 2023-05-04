import { useState } from "react";

const World = () => {
//   const [name, setName] = useState("Guest");
//   const [email, setEmail] = useState("g@gmail.com");
const [ user, setUser ]  = useState({
    name: "Guest",
    email: "guest@gmail.com"
})
  const onClickHandler = () => {
    // setName("Jone");
    // setEmail("jone@gmail.com")
    setUser({
        ...user,
        //name: "John",
        email: "John@gmail.com"
    });
  };

  return (
    <div>
      <h1>Welcome {user.name},  {user.email}</h1>
      <button onClick={onClickHandler}>Update</button>
    </div>
  );
};
export default World;
