import React from 'react';
import { TodoItem } from './todoItem';

export const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
