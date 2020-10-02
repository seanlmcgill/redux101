import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './todoItem';

export const TodoList = () => {
  const { list } = useSelector((state) => state.todos);
  return (
    <div>
      {list.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
