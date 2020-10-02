import React, { useEffect, useState } from 'react';
import { Container, Navbar, Badge } from 'react-bootstrap';
import axios from 'axios';
import { MainView } from './mainView';

// Example of passing via props without redux, a bit contrived to demo passing of props

export const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTodos = async () => {
      const result = await axios.get('./todos.json');
      // added delay for effect
      setTimeout(() => {
        setTodos(result.data);
        setLoading(false);
      }, 2000);
    };
    getTodos();
  }, []);

  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">Plain React</Navbar.Brand>
        {!loading ? (
          <Badge pill variant="primary">
            Todo count {todos.length}
          </Badge>
        ) : null}
      </Navbar>
      <MainView todos={todos} loading={loading} />
    </Container>
  );
};
