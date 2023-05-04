import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("hi from parent");

  const updateMesage = (name) => {
    setMessage("hi from Child: " + name);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h1>{message}</h1>
      <hr />
      <Child data={message} handler={updateMesage} />
    </div>
  );
};

export default Parent;
