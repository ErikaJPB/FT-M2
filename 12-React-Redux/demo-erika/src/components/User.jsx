import React from "react";

const User = (props) => {
  return (
  <div>
    <hr></hr>
    <p>{props.name}</p>
    <p>{props.id}</p>
    <p>{props.username}</p>
    <hr></hr>
  </div>
)};

export default User;
