import React, { Component } from "react";
import "./App.css";
import Image from "./Image"; 

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Image myImage= {"https://americanaussie.files.wordpress.com/2012/04/koala-9.jpg"} />
      </div>
    );
  }
}


export default App;
