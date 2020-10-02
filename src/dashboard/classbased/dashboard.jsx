import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Badge } from 'react-bootstrap';
import MainView from './mainView';

// Class based - redux access is messy and not straight forward

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">Redux (Class Based)</Navbar.Brand>
          {!this.props.loading ? (
            <Badge pill variant="primary">
              Todo count {this.props.list.length}
            </Badge>
          ) : null}
        </Navbar>
        <MainView />
      </Container>
    );
  }
}

// Wire-up redux data access
const mapStateToProps = (state) => {
  return {
    ...state.todos
  };
};

export default connect(mapStateToProps)(Dashboard);
