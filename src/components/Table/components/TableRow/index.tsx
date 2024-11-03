import React from 'react';
import Avatar from '../../../../images/avatar.svg';
import s from './tableRow.module.scss';

interface TableRowProps {
  name: string;
  mail: string;
  id: number;
  todos: number;
}

export const TableRow = ({ name, mail, id, todos }: TableRowProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <div className={s.row}>
          <img src={Avatar} alt="User image" />
          <div className={s.row__info}>
            <h2>{name}</h2>
            <p>{mail}</p>
          </div>
        </div>
      </td>
      <td>{todos}</td>
    </tr>
  );
};
