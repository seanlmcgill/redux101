import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';
import TodoList from './todoList';
import { loadTodos } from '../store';

class MainView extends Component {
  render() {
    return (
      <Jumbotron>
        <TodoList todos={this.props.list} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            this.props.refresh();
          }}>
          Re-load
        </Button>
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
