import React from "react";
import ReactDOM from "react-dom";
import './my-element.js';
import '@babel/polyfill';

class App extends React.Component {
  render() {
  return (
    <div>
      <my-element mood="awesome" />
      <div>Hello World</div>
    </div>
      );
  }
}

window.addEventListener('WebComponentsReady', () => {
  ReactDOM.render(<App />, document.getElementById("root"));
})
