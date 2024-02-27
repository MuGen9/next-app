import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  console.log(users);

  return (
    <>
      <h1>Users:</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;