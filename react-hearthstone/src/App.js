import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import KoTFT from './card-data.js'
import CardInfo from './component/CardInfo.js'
import './component/CardInfo.css'
class App extends Component {
constructor(){
  super()
  this.state={
    cards:[]
  }
}
componentDidMount(){
  this.setState({cards: KoTFT});
}

  render() {
    return (
       <CardInfo {...this.state}/>   
    );
  }
}

export default App;
