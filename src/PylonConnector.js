import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class PylonConnector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        }; 
        // 初始化
    } 

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
                // 延迟
            })
        };
    }

    render() {
        return (
            <span className="PylonConnector">
                {this.state.latency}
            </span>
        );
    }
}

export default PylonConnector;
