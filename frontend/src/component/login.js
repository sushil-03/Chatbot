import React, { useState, useEffect } from "react";
import { AiFillAliwangwang, AiOutlineCopyrightCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Common/Input";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [chat, showChat] = useState(false);

  const [error, showErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/login", {
        student_id: id,
        password,
      });

      console.log(response);
      localStorage.setItem("token", response.data.token);
      if (response.data.success) {
        showChat((chat) => !chat);
      }
    } catch {
      showErr((err) => !err);
    }
  };
  useEffect(() => {
    if (chat) {
      alert("Login Successfully");
      navigate("/chatbot");
    }
  }, [chat]);

  return (
    <div className="container1 w-screen h-screen  relative">
      <div className="page flex flex-row w-4/5 h-4/5 m-auto absolute">
        <div className="left w-1/2 relative">
          {/* <IconContext.Provider value={{className=''}}> */}
          <div className="icon">
            <IconContext.Provider value={{ color: "black", size: "4rem" }}>
              <AiFillAliwangwang />
            </IconContext.Provider>
          </div>
          <h2>Login</h2>

          <form onSubmit={handleSubmit} className="my-8">
            <div className="id ">
              <label className="text-sm font-semibold ">Student Id*</label>
              <Input
                type="text"
                name=""
                id="text"
                value={id}
                placeholder="Ex: 20011554"
                required
                onChange={(e) => {
                  setId(e.target.value);
                }}
                error={error}
              />
            </div>
            <div
              className="password -
            my-4"
            >
              <label className="text-sm font-semibold">Password*</label>
              <Input
                type="password"
                name=""
                value={password}
                id="password"
                placeholder="password"
                required
                error={error}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className=" m-3 w-1/3 p-2 bg-blue-900 bg-opacity-100 text-white rounded-3xl hover:bg-blue-700 text-xl font-semibold"
            >
              Login
            </button>
          </form>
          <span className="text-lg font-semibold text-bl">
            Not registerd yet?{" "}
            <Link to="/register" className="text-blue-800 hover:text-blue-500">
              Create an Account
            </Link>
          </span>
          <span className="flex flex-row mx-14 absolute -bottom-0 items-center text-gray-500">
            <AiOutlineCopyrightCircle />
            All right reserved
          </span>
        </div>
        <div className="right w-1/2">
          <div className="img w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
