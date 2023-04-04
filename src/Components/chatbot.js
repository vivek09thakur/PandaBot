import React, { useState } from 'react';
import './Chatbot/chatbot.css';

const regexes = [
  {
    pattern: /hello|hi|hey/i,
    response: "Hello! How can I help you today?",
  },
  {
    pattern: /whats up|what are you doing|whats going on/i,
    response: "nothing much just ...trying to respond your messages",
  },
  {
    pattern: /how are you|how's it going/i,
    response: "I'm doing well, thank you for asking. How are you?",
  },
  {
    pattern: /i am fine|yeah...fine|i am good|i'm good/i,
    response: "I'm glad that you are fine",
  }
]

function Chatbot() {
  const [messages, setMessages] = useState([]);

  async function typeChat(message, index) {
    const delay = 25;
    let updatedMessages = [...messages];
    updatedMessages[index] = { ...updatedMessages[index], typing: true };
    setMessages(updatedMessages);

    for(let i=0;i<message.length;i++) {
      updatedMessages[index] = { ...updatedMessages[index], text: message.slice(0, i+1) };
      setMessages(updatedMessages);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    updatedMessages[index] = { ...updatedMessages[index], typing: false };
    setMessages(updatedMessages);
  }

  function generateResponse(input) {
    let response = 'currently i dont have data about it .. you can contact this number : 1714173314, for more information';
    for(const regex of regexes) {
      if(input.match(regex.pattern)) {
        response = regex.response;
        break;
      }
    }
    return response;
  }

  async function handleSubmit(event){
    event.preventDefault();
    const userInput = event.target.elements.input.value.toLowerCase().replace('?', '');
    event.target.elements.input.value = '';

    const botResponse = generateResponse(userInput);
    const newMessage = { text: userInput, user: true };
    setMessages([...messages, newMessage]);
    await typeChat('...', messages.length);
    setMessages([...messages, { text: botResponse, user: false }]);
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1 className="chatbot-title">PandaBot</h1>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.user ? 'user-message' : 'bot-message'}`}>
            {message.typing && <div className="typing-indicator"></div>}
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="Enter your query" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
