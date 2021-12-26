import React from "react";
import { AiFillAliwangwang, AiOutlineCopyrightCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Input from "../Common/Input";
const regiter = () => {
  return (
    <div className="container1 w-screen h-screen  relative">
      <div className="page flex flex-row w-4/5 h-4/5 m-auto absolute">
        <div className="left w-full relative">
          <div className="icon">
            <IconContext.Provider value={{ color: "black", size: "4rem" }}>
              <AiFillAliwangwang />
            </IconContext.Provider>
          </div>
          <h2>Register</h2>

          <form
            action="submit"
            className="my-8 flex flex-row flex-wrap justify-center gap-6 flex-grow"
          >
            <div className="name ">
              <span className="text-sm font-semibold">Name*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Ex: 20011554"
                required
              />
            </div>
            <div className="college ">
              <span className="text-sm font-semibold">College*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="college name"
                required
              />
            </div>

            <div className="college id">
              <span className="text-sm font-semibold">College Id*</span>
              <Input
                type="email"
                name=""
                id=""
                placeholder="@gehu.ac.in"
                required
              />
            </div>

            <div className="branch">
              <span className="text-sm font-semibold">Branch*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Ex: btech"
                required
              />
            </div>

            <div className="id ">
              <span className="text-sm font-semibold">Student Id*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Ex: 20011554"
                required
              />
            </div>
            <div className="semester">
              <span className="text-sm font-semibold">Semester*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="semester"
                required
              />
            </div>
            {/* gy */}
            <div className="rollNo">
              <span className="text-sm font-semibold">
                University Roll Number*
              </span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="roll no."
                required
              />
            </div>
            <div className="course">
              <span className="text-sm font-semibold">Course*</span>
              <Input type="text" name="" id="" placeholder="course" required />
            </div>

            <div className="phone ">
              <span className="text-sm font-semibold">Contact Info*</span>
              <Input type="text" name="" id="" placeholder="contact" required />
            </div>
            <div className="password">
              <span className="text-sm font-semibold">Password*</span>
              <Input
                type="text"
                name=""
                id=""
                placeholder="password"
                required
              />
            </div>
            {/* uyui */}
          </form>
          <div className="w-full  flex items-center justify-center flex-col ">
            <button
              type="submit"
              className=" w-1/3 p-2 bg-blue-900 bg-opacity-100 text-white rounded-3xl hover:bg-blue-700 text-xl font-semibold "
            >
              Register
            </button>
            <p className="text-lg font-semibold text-bl my-4">
              Already have an Account?{" "}
              <Link to="/login" className="text-blue-800 hover:text-blue-500">
                Sign In
              </Link>
            </p>
            <p className="flex flex-row  absolute -bottom-0 items-center text-gray-500 ">
              <AiOutlineCopyrightCircle />
              All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default regiter;
