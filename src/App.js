import React, { Component } from "react";
import "./CSS/App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

class App extends Component {
  render() {
    return (
      <main>
        <AddTodo />
        <TodoList />
        <button>Reset All</button>
      </main>
    );
  }
}

export default App;
