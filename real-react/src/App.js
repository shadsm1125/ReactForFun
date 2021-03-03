import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.title}</h1>
          <div>{this.props.testObject.a}</div>
          <div>{this.props.testObject.b}</div>
          <div>{this.props.addFunction(3, 7)}</div>
          <div>{this.props.multiFunction(2, 4)}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class App extends Component {
  multiply(a, b) {
    return a * b;
  }
  render() {
    const add = (a, b) => a + b;
    return (
      <div className="App">
        <Header
          title={"this is the title"}
          testObject={{ a: 4, b: 33 }}
          addFunction={add}
          multiFunction={this.multiply}
        />
      </div>
    );
  }
}

export default App;
