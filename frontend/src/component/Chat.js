import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import Config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import Fade from "@material-ui/core/Fade";

// import logo from "../component/test.gif";

const Chat = () => {
  const navigate = useNavigate();
  const [showbot, toggleBot] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (token === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="p-4 chat w-screen h-screen overflow-hidden">
      {/* navbar */}

      <div className="heading w-full flex flex-row justify-between  align items-center">
        <div className="logo  text-6xl text-white m-3 font-redressed">
          <Link to="/" className="">
            chatbot.io
          </Link>
        </div>
        <div className=" bot md:text-5xl text-3xl text-white m-3 font-redressed flex ">
          <p
            onClick={() => toggleBot((prev) => !prev)}
            className="cursor-pointer"
          >
            Get Details
          </p>
          <Link
            to="/"
            className=" w-10 h-10  md:text-4xl  text-2xl mx-10 cursor-pointer"
            onClick={() => {
              alert("Logging Out");
              navigate("/");
              localStorage.removeItem("token");
            }}
          >
            LogOut
          </Link>
        </div>
      </div>

      {/* body */}

      <div className="content p-10  flex flex-row justify-center items-center">
        <div className=" md:block  hidden left w-1/2 px-2">
          <p className="text-xl font-medium m-5">
            2.5 billion – that’s how many customer service hours businesses will
            save by 2023 through the adoption of chatbots, as estimated by
            Juniper Research. Chatbot growth, as we are aware, has been
            phenomenal across industries in the last few year.
            <br />
            <br /> Chatbots are categorized mainly into two different types :–
            <br />
            <br />
            <strong className="">1. Rule-Based Chatbots</strong>: They follow a
            set of pre-defined rules or flows to respond to queries of a user.
            Most simple applications contain rule-based chatbots, which respond
            to questions based on the preset rules. <br />
            <br />
            <strong>2. AI Chatbots</strong>: AI chatbots are more advanced and
            based on machine learning. AI chatbot uses natural language
            processing services to understand the meaning behind the questions
            posed.
          </p>
        </div>
        <div className="md:w-1/2 w-full right mx-5 ">
          <div className="videoA  w-full h-full"></div>
        </div>
      </div>

      {/* Chatbot */}
      {showbot && (
        <Fade in={showbot} style={{ transitionDelay: "100ms" }}>
          <div>
            <Chatbot
              config={Config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
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
