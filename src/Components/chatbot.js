import React, { useState } from 'react';
import './Chatbot/chatbot.css';

const regexes = [
  {
    pattern: /hello|hi|hey/i,
    response: "Hello! How can I help you today?",
  },
  {
    pattern: /whats up|what are you doing|whats going on/i,
    response: "Nothing much,just trying to respond to your messages.",
  },
  {
    pattern: /how are you|how's it going,
    response: "I'm doing well, thank you for asking. How about you?",

  },
  {
    pattern: /What is my attendance of this month।my attendance, 
    response: "Your attendance for this month is 76% . Congrats! You're eligible for attending CT as well.", 

  },
  {
    pattern: How to get admission in Rungta ?, 
    response: "Contact for Admissions :
Bhilai - 9016-112222
Raipur - 9016-113333", 

  }, 
  {
    pattern: /highest placement in Rungta।placement, 
    response: " The highest placement in Rungta till now is ₹48L per annum in Dbs bank and ₹38L in Amazon.", 

  },
  {
    pattern: /i am fine|yeah...fine|i am good|i'm good/i,
    response: "I'm glad to hear that!",
  }
];

function Chatbot() {
  const [messages, setMessages] = useState([]);

  function generateResponse(input) {
    let response = "Currently, I don't have any information about that. You can contact this number: 1714173314, for more information.";
    for (const regex of regexes) {
      if (input.match(regex.pattern)) {
        response = regex.response;
        break;
      }
    }
    return response;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements.input.value.toLowerCase().replace('?', '');
    event.target.elements.input.value = '';
    const botResponse = generateResponse(userInput);
    setMessages([...messages, { text: userInput, user: true }, { text: botResponse, user: false }]);

  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
      <h1 className="chatbot-title">  PANDABOT    <img src='panda.svg' alt='icon'/></h1>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.user ? 'user-message' : 'bot-message'}`}>
            <span>{message.user ? 'User Said : ' : 'PandaBot : '}{message.text}</span>
          </div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="Enter your query" />
        <button type="submit"><span class="material-symbols-outlined">
          send
        </span></button>
      </form>
    </div>
  );
}

export default Chatbot;
