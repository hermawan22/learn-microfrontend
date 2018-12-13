import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "./actions/index";

class App extends Component {
  // componentDidMount() {
  //   // this.props.fetchData();
  // }

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

// const mapStateToProps = state => {
//   return {
//     data: state.data.data,
//     fetching: state.data.fetching
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchData }
// )(App);

export default App;
