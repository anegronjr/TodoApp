import React, { Component } from "react";

class AddTodo extends Component {
  onAdd = () => {
    this.props.setText("");
    this.props.addTodo(this.props.text);
  };

  onTextChange = (event) => {
    this.props.setText(event.target.value);
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <input type="text" value={text} onChange={this.onTextChange} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
