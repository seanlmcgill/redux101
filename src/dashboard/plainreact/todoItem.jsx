import React from 'react';
import { Card } from 'react-bootstrap';

export const TodoItem = (props) => {
  return (
    <Card>
      <Card.Body>
        {props.todo.description}
        {props.todo.completed ? <i className="material-icons">check_circle</i> : null}
      </Card.Body>
    </Card>
  );
};
