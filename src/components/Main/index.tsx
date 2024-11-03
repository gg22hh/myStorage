import React, { useEffect, useState } from 'react';
import { Table } from '../Table';
import s from './main.module.scss';
import useGetData from '../../utils/hooks';

export const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: users, isLoading: usersLoading } = useGetData(
    'https://jsonplaceholder.typicode.com/users'
  );
  const { data: todos, isLoading: todosLoading } = useGetData(
    'https://jsonplaceholder.typicode.com/todos'
  );

  useEffect(() => {
    if (usersLoading || todosLoading) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [usersLoading, todosLoading])

  return (
    <div className="main">
      <h1 className={s.title}>User To-Do Table</h1>
      <p className={s.description}>User task table for effective planning.</p>
      <Table users={users} todos={todos} isLoading={isLoading} />
    </div>
  );
};
