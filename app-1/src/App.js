import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); 
    this.state ={
      fontColor: 'black', 
      fontSize: 12, 
    }
  }
  render() {
    return (
      <div>
        <div className="editBar">
         
        </div>

        <div className="output">
          
        </div>
      </div>
    );
  }
}

export default App;
