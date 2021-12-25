import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
const Chat = () => {
  const [showbot, toggleBot] = useState(false);
  return (
    <div className="p-4">
      {/* navbar */}

      <div className="heading flex flex-row justify-between  align items-center">
        <div className="logo text-6xl text-white m-3 font-redressed">
          <Link to="/" className="">
            chatbot.io
          </Link>
        </div>
        <div className="bot text-5xl text-white m-3 font-redressed">
          <Link to="">Get Details</Link>
        </div>
      </div>

      {/* body */}
      <div className="content">
        <p>
          2.5 billion – that’s how many customer service hours businesses will
          save by 2023 through the adoption of chatbots, as estimated by Juniper
          Research. Chatbot growth, as we are aware, has been phenomenal across
          industries in the last few years.
        </p>
      </div>

      {/* Chatbot */}
      {showbot && <Chatbot />}
      <button
        onClick={() => toggleBot((prev) => !prev)}
        className="bg-white w-16 h-16 rounded-full fixed flex flex-col bottom-7"
      >
        <div className="mx-5">Bot</div>
        <svg viewBox="0 0 650 512" className="mx-4 w-10">
          <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Chat;
