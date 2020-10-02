import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from './todoItem';

class TodoList extends Component {
  render() {
    console.log(this.props.list);
    return (
      <div>
        {this.props.list.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
