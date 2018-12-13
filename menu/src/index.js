import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

/* If want to use web components */
// class Header extends HTMLElement {
//   connectedCallback() {
//     ReactDOM.render(<App />, this.createShadowRoot());
//   }
// }

// customElements.define("microfrontends-header", Header);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
