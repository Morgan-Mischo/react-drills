import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewTask from "./NewTask.js"; 
import List from "./List.js"; 
import Todo from "./Todo.js"; 

class App extends Component {
  constructor() {
    super(); 
    this.state={
      list: [], 
      input: ""
    }
    this.handleAddTask = this.handleAddTask.bind(this); 
  }

  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task], 
      input: ""
    })
  }
  render() {
    return (
      <div className = "App">
        <h1> My To-Do List: </h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
