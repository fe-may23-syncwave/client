/* eslint-disable @typescript-eslint/no-shadow */
import { usePageError } from 'hooks/usePageError';
import React, { useEffect, useState } from 'react';
import { userService } from 'services/userService';
import { IUser } from 'types/User';

export const UsersPage: React.FC = () => {
  const [error, setError] = usePageError('');
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userService
      .getAll()
      .then(({ data }) => setUsers(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="content">
      <h1 className="title">Users</h1>

      <ul>{users?.map((user) => <li key={user.id}>{user.email}</li>)}</ul>

      {error && <p className="notification is-danger is-light">{error}</p>}
    </div>
  );
};
