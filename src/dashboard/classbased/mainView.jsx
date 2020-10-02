import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Spinner } from 'react-bootstrap';
import TodoList from './todoList';
import { loadTodos } from '../store';

class MainView extends Component {
  render() {
    return (
      <Jumbotron>
        {this.props.loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            <TodoList />
            <Button
              onClick={(e) => {
                e.preventDefault();
                this.props.refresh();
              }}>
              Re-load
            </Button>
          </>
        )}
      </Jumbotron>
    );
  }
}

// Wire-up redux data access
const mapStateToProps = (state) => {
  return {
    ...state.todos
  };
};

// Wire up redux action events
const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch(loadTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
