import './App.css';
import React, { Component } from 'react';
import Exhibit from './Exhibit';
import PylonConnector from './PylonConnector';
import AddressDisplay from './AddressDisplay';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Exhibit name="ipv4,,,,,,,,,,," children="await ipify()">
              <AddressDisplay url='https://api.ipify.org?format=json' />
              </Exhibit>
              <Exhibit name="IPV6,............" children="await ipify({useIPv6: false})">
              <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name=" Pylon 的数据包延迟" >
                <PylonConnector />
                </Exhibit>
          </div>
      );
  }
}



export default App;
