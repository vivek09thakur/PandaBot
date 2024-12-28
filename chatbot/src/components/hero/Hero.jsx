import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NavBar from "../modules/Nav";

const Hero = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [userPrompt, setuserPrompt] = useState("");

  const ChatBox = ({ messageHistory }) => {
    
    return (
      <>
        <div className="chat_history">
          <Chat />
        </div>
      </>
    );
  };

  const Chat = ({ userPrompt, botCompletion }) => {
    return (
      <>
        <div className="prompt_box">
          <input type="text" id="user_prompt" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="hero">
        <NavBar />
        <ChatBox />
      </div>
    </>
  );
};

export default Hero;
