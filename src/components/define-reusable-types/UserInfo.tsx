import React from "react";
import { Info } from "../../types";

const UserInfo = ({
  id,
  name,
  email,
}:Info) => {
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
};

export default UserInfo;
