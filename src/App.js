import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Head from './Head'
import Section1 from './Section1'
import Section2 from './Section2'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Head />
        <Section1 />
        <Section2 />
      </div>
    );
  }
}
export default App;