import './App.css';
import React, { Component } from 'react';
import Exhibit from './Exhibit';
// import ipify from 'ipify';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Exhibit name="ipv4,,,,,,,,,,," children="await ipify()">
              
              </Exhibit>
              <Exhibit name="IPV6,............" children="await ipify({useIPv6: false})">
               
                </Exhibit>
          </div>
      );
  }
}



export default App;
