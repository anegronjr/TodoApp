import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    const todoListItems = todos.map((item) => <li key={item}>{item}</li>);

    return (
      <div>
        <ul>
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
