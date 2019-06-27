import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
          image="http://www.leseco.ma/images/stories/1799/universite-de-Salamanque.jpg"
          destination="Salamanca"
          country="Espagne"
          distance="1403.9 km" 
        />
        <Travel
          image="http://techniquedepeinture.com/wp-custom/uploads/2015/10/chapelle-sixtine.jpg"
          destination="Roma"
          country="Italy"
          distance="1369.99 km" 
        />
      </div>
    );
  }
}

export default App;
