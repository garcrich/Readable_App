import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/Nav';
import Header from './components/Header';
import MainArea from './components/MainArea'

class App extends Component {
  render() {
    return (
      <div className="content">
      <Navbar/>
      <Header/>
      <MainArea/>
    </div>
    );
  }
}

export default App;
