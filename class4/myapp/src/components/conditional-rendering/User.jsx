import React, { useState } from "react";

const User = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  // return(
  //     <div>
  //         <h1>Welcome Guest</h1>
  //         <h1>Welcome John</h1>
  //     </div>
  // )

  // 1: if-else
  // if(loginStatus){
  //     return <h1>Welcome John</h1>
  // }else{
  //     return <h1>Welcome Guest</h1>
  // }

  // 2: element value
  // let response;
  // if(loginStatus){
  //     response = <h1>Welcome John</h1>
  // }else{
  //     response = <h1>Welcome Guest</h1>
  // }
  // return response

  // 3: turney opeartor
  //return loginStatus ? <h1>Welocme John</h1> : <h1>Welcome Guest</h1>

  // 4: circuit breaker
  // return loginStatus && <h1>Welcome John </h1>
  //return !loginStatus && <h1>Welcome Guest </h1>

  // return(
  //     <div>
  //         <button className="btn btn-primary">Login</button>
  //         <button className="btn btn-danger">Logout</button>
  //     </div>
  // )

  return loginStatus ? (
    <button className="btn btn-danger">Logout</button>
  ) : (
    <button className="btn btn-primary">Login</button>
  );
};
export default User;
