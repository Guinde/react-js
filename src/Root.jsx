import React, { Component } from "react";
import Navbar from "../src/components/navbar";
import App from '../src/App';

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <App />
      </div>
    );
  }
}

export default Root;
