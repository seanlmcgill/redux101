import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { TodoList } from './todoList';

export const MainView = (props) => {
  return (
    <Jumbotron>
      <TodoList todos={props.todos} />
    </Jumbotron>
  );
};
