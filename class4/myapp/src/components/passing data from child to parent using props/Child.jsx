const Child = (props) => {
    return (
      <div>
        <h1>Child Component</h1>
        <h1>{props.data}</h1>
        <button onClick={() => props.handler("John")}>Update</button>
      </div>
    );
  };
  export default Child;
  