import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";

import Config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import logo from "../component/test.gif";
const Chat = () => {
  const [showbot, toggleBot] = useState(false);
  return (
    <div className="p-4 bg-purple-500 w-screen h-screen">
      {/* navbar */}

      <div className="heading w-full flex flex-row justify-between  align items-center">
        <div className="logo  text-6xl text-white m-3 font-redressed">
          <Link to="/" className="">
            chatbot.io
          </Link>
        </div>
        <div className=" bot text-5xl text-white m-3 font-redressed flex items-center ">
          <p
            onClick={() => toggleBot((prev) => !prev)}
            className="cursor-pointer"
          >
            Get Details
          </p>
          <Link
            to="/login"
            className="m-4 w-10 h-10 text-4xl mx-10 cursor-pointer"
          >
            LogOut
          </Link>
        </div>
      </div>

      {/* body */}
      <div className="content p-10 m-5">
        <p>
          2.5 billion – that’s how many customer service hours businesses will
          save by 2023 through the adoption of chatbots, as estimated by Juniper
          Research. Chatbot growth, as we are aware, has been phenomenal across
          industries in the last few year.
        </p>
        <img src="{logo}" alt="loading.." />
      </div>

      {/* Chatbot */}
      {showbot && (
        <div>
          <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button
        onClick={() => toggleBot((prev) => !prev)}
        className="bg-white w-16 h-16 rounded-full fixed flex flex-col bottom-7"
      >
        <p className="mx-5  font-semibold">Bot</p>
        <svg viewBox="0 0 650 512" className="mx-auto  w-10">
          <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Chat;
