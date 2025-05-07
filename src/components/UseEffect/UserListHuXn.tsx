import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
}

const UserListHuXn = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) throw new Error("New Error Occured");

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error Occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (error) return <div>Loading...</div>;

  if (loading) return <h1>Error: {error}</h1>;

  return (
    <div>
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListHuXn;
