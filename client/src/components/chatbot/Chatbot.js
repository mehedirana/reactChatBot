import React, { Component } from 'react';

class Chatbot extends Component {
    render() {
        return (
            <div style={{height:400, width:400, float:'right'}}>
                <div id="chatbot" style={{height:'100%', width:'100%', overflow:'auto'}}>
                    <h2>ChatBot</h2>
                    <input type="text" />

                </div>

            </div>
        )
    }
}

export default Chatbot;