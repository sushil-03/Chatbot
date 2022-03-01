import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import Config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import Fade from "@material-ui/core/Fade";

import { useAlert } from "react-alert";
const Chat = () => {
  const alert = useAlert();
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
        <div className=" bot  text-3xl text-white m-3 font-roboto flex ">
          <p
            onClick={() => toggleBot((prev) => !prev)}
            className="cursor-pointer"
          >
            Get Details
          </p>
          <Link
            to="/"
            className=" w-10 h-10  md:text-3xl  text-2xl mx-10 cursor-pointer"
            onClick={() => {
              alert.success("Logging Out");
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
        className="bg-transparent w-48 h-32 mt-2  rounded-full fixed flex flex-col bottom-2"
      >
        <img
          src="/icon.gif"
          alt=""
          className="z-10 absolute w-full h-full  fill-current "
        />
      </button>
    </div>
  );
};

export default Chat;
