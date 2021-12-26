import React from "react";
import { AiFillAliwangwang, AiOutlineCopyrightCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Input from "../Common/Input";
const login = () => {
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

          <form action="submit" className="my-8">
            <div className="id ">
              <span className="text-sm font-semibold ">Student Id*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Ex: 20011554"
                required
              />
            </div>
            <div
              className="password -
            my-4"
            >
              <span className="text-sm font-semibold">Password*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="password"
                required
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

export default login;
