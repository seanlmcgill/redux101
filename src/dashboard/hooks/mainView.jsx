import React from 'react';
import { Jumbotron, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from './todoList';
import { loadTodos } from '../store';

export const MainView = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todos);
  return (
    <Jumbotron>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <TodoList />
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(loadTodos());
            }}>
            Re-load
          </Button>
        </>
      )}
    </Jumbotron>
  );
};
