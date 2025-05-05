import React, { FC } from "react";

// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>isStudent: {isStudent}</h1>
    </div>
  );
};

export default User;
