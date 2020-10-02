import React, { useEffect, useState } from 'react';
import { Container, Navbar, Badge } from 'react-bootstrap';
import axios from 'axios';
import { MainView } from './mainView';

// Example of passing via props without redux, a bit contrived to demo passing of props

export const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const result = await axios.get('./todos.json');
      setTodos(result.data);
    };
    getTodos();
  }, []);

  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">Plain React</Navbar.Brand>
        <Badge pill variant="primary">
          Todo count {todos.length}
        </Badge>
      </Navbar>
      <MainView todos={todos} />
    </Container>
  );
};
