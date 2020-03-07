import React, { Component } from 'react';
import axios from 'axios/index';
class Chatbot extends Component {
    constructor(props){
        super(props);

        this.state = {
            messages: []
        }
    }


     async df_text_query(text){
         let says = {
             speaks: 'me',
             msg: {
                 text:{
                     text: text
                 }
             }
         };

         this.setState({messages: [...this.state.messages,says]});
        const res = await axios.post('/api/df_text_query',{text});

        for(let msg of res.data.fullfillmentMessages){
            says ={
                speaks: 'bot',
                msg: 'me'
            }
            this.setState({messages: [...this.state.messages, says]});
        }
    }

    async df_evet_query(event){

        const res = await axios.post('/api/df_event_query,{event}');

        for(let msg of res.data.fullfillmentMessages){
            let says ={
                speaks : 'me',
                msg: 'msg'
            };
            this.setState({messages: [...this.state.messages, says]});
        }
    }

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