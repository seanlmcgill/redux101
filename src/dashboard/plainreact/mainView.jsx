import React from 'react';
import { Jumbotron, Spinner } from 'react-bootstrap';
import { TodoList } from './todoList';

export const MainView = (props) => {
  return (
    <Jumbotron>
      {props.loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <TodoList todos={props.todos} />
      )}
    </Jumbotron>
  );
};
