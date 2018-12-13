import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    window.addEventListener("clicked", event => {
      alert("hello!!");
    });
  }
  render() {
    return (
      <div className="App">
        <div>Content</div>
      </div>
    );
  }
}

export default App;
