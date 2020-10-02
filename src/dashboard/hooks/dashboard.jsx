import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Navbar, Badge } from 'react-bootstrap';
import { MainView } from './mainView';

// Cleaner redux access with hooks, less code, less confusion

export const Dashboard = () => {
  const { list, loading } = useSelector((state) => state.todos);
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">Redux (Hooks)</Navbar.Brand>
        {loading ? (
          <Badge pill variant="primary">
            Todo count {list.length}
          </Badge>
        ) : null}
      </Navbar>
      <MainView />
    </Container>
  );
};
