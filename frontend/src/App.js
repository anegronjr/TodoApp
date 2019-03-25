import React, { Component } from "react";
import "./CSS/App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Add ToDo...",
      todos: ["Loading..."]
    };
  }

  componentDidMount() {
    fetch("https://localhost:44317/api/todos")
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }

  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };

  setText = text => {
    this.setState({ currentItemText: text });
  };

  addTodo = text => {
    fetch("https://localhost:44317/api/todos", {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const newTodos = [...this.state.todos, text];
          this.setState({ todos: newTodos });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <main>
        <AddTodo
          text={this.state.currentItemText}
          setText={this.setText}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </main>
    );
  }
}

export default App;
