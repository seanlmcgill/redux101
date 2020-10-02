import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Example of passing via props without redux, a bit contrived to demo passing of props

export const PrDashboard = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const result = axios.get('todos.json');
      console.log(result.data);
    };
    getTodos();
  }, []);

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Plain React</Navbar.Brand>
        <span></span>
      </Navbar>
      <MainView />
    </Container>
  );
};
