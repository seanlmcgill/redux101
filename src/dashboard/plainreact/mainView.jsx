import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const MainView = (props) => {
  return (
    <Jumbotron>
      <TodoList />
    </Jumbotron>
  );
};
