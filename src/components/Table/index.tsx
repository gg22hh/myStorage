import React from 'react';
import s from './table.module.scss';
import { TTodo, TUser } from '../../utils/types';
import { TableRow } from './components/TableRow';

interface TableProps {
  users: TUser[] | null;
  todos: TTodo[] | null;
  isLoading: boolean
}

export const Table = ({ users, todos, isLoading }: TableProps) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!users || !todos) {
    return <div>No users or todos</div>;
  }

  const usersList = users.map((user) => {
    const todo = todos.filter((todo) => user.id === todo.userId);

    return (
      <TableRow
        key={`${user.id}-${user.email}`}
        id={user.id}
        name={user.name}
        mail={user.email}
        todos={todo.length}
      />
    );
  });

  return (
    <table className={s.table} border={0} cellPadding={0} cellSpacing={0}>
      <thead className={s.header}>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>to-do count</th>
        </tr>
      </thead>
      <tbody className={s.body}>{usersList}</tbody>
    </table>
  );
};
