import React from 'react';
import './Chatbot/chatbot.css';
function Chatbot(){
    return(
    <div className="chatbox">
        <h1 id='title'>PandaBot</h1>
        <div className="banner">
            <h3>Hey! There , I am PandaBot From Rungta College</h3>
            <p>I am here to help you out. Don't hesitate to ask any queries about Rungta College Of Engineering</p>
        </div>
        <div className="chatMessage">

        </div>
        <input type="text" id='input' placeholder='enter your query'/>
    </div>
    );
}

export default Chatbot;