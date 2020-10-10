import React, { Component } from 'react';
import './App.css';
import Navigate from './components/Navigate';
import Multiplicacao from './components/Multiplicacao';
import Soma from './components/Soma';
import Maior from './components/Maior';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> React-Redux Calculadora</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <Soma />
          <Multiplicacao />
          <Maior />
        </div>
      </div>
    )
  }
}