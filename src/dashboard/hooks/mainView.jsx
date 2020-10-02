import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { TodoList } from './todoList';
import { loadTodos } from '../store';

export const MainView = () => {
  const dispatch = useDispatch();
  return (
    <Jumbotron>
      <TodoList />
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(loadTodos());
        }}>
        Re-load
      </Button>
    </Jumbotron>
  );
};
