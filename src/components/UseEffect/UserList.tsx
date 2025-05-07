import React, { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
};

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const result = await response.json();

        setUsers(result);
      } catch (error) {
        console.error("Error", error);
      }
    }

    getUserInfo();
  }, []);

  return (
    <div>
      {users ? (
        <div>
          {users.map((user, index) => (
            <ol type="i" key={index}>
              <li>ID: {user.id}</li>
              <li>Name: {user.name}</li>
              <li>Username: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <br />
            </ol>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;
