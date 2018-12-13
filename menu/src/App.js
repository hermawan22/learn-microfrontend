import React, { Component } from "react";

class App extends Component {
  crossApp(info) {
    const event = new CustomEvent("clicked", { info });
    window.dispatchEvent(event);
    console.log(info);
  }

  render() {
    return (
      <div className="App">
        <div>Menu</div>
        <div onClick={this.crossApp.bind(this, "clicked")}>Click me!</div>
      </div>
    );
  }
}

export default App;
