import React, { Component } from "react";
import "./CSS/App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Add ToDo...",
      todos: ["Add a Todo!", "Remove a Todo!"]
    };
  }

  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };

  setText = (text) => {
    this.setState({ currentItemText: text});
  };

  addTodo = (text) => {
    const newTodos = [...this.state.todos, text];
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <main>
        <AddTodo text={this.state.currentItemText} setText={this.setText} addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </main>
    );
  }
}

export default App;
