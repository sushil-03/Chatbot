import React, { useState, useEffect } from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Common/Input";
import axios from "axios";
import { useAlert } from "react-alert";
const Register = () => {
  const alert = useAlert();
  const [chat, showChat] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [collegeEmailId, setEmailId] = useState("");
  const [branch, setBranch] = useState("");
  const [student_id, setId] = useState("");
  const [semester, setSemester] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, showErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/register", {
        name,
        college,
        collegeEmailId,
        branch,
        student_id,
        semester,
        roll,
        course,
        contact,
        password,
      });
      if (response.data.success) {
        alert.success("Registration Successfully");
        showChat((chat) => !chat);
      }
    } catch {
      alert("Already has a id");
      showErr((err) => !err);
    }
  };
  useEffect(() => {
    if (chat) {
      navigate("/chatbot");
    }
  }, [chat, navigate]);
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

          <form onSubmit={handleSubmit} className="m">
            <div className="information py-8 flex flex-row flex-wrap justify-center gap-6 flex-grow">
              <div className="name ">
                <span className="text-sm font-semibold">Name*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  value={name}
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="college ">
                <span className="text-sm font-semibold">College*</span>
                <Input
                  value={college}
                  type="text"
                  name=""
                  id=""
                  placeholder="College name"
                  required
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>

              <div className="college id">
                <span className="text-sm font-semibold">College Email Id*</span>
                <Input
                  value={collegeEmailId}
                  type="email"
                  name=""
                  id=""
                  placeholder="@gehu.ac.in"
                  required
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="course">
                <span className="text-sm font-semibold">Course*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Course"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div className="branch">
                <span className="text-sm font-semibold">Branch*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  value={branch}
                  placeholder="Ex: btech"
                  required
                  onChange={(e) => setBranch(e.target.value)}
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
                  value={student_id}
                  onChange={(e) => setId(e.target.value)}
                  error={error}
                />
                {error && (
                  <div className="Error text-red-800 ml-5 font-semibold">
                    Id Already Exist
                  </div>
                )}
              </div>
              <div className="semester">
                <span className="text-sm font-semibold">Semester*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Semester"
                  required
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
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
                  placeholder="Roll no."
                  required
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                />
              </div>

              <div className="phone ">
                <span className="text-sm font-semibold">Contact Info*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="password">
                <span className="text-sm font-semibold">Password*</span>
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="btn flex justify-center items-center">
              <button
                type="submit"
                className=" w-1/3 p-2 bg-blue-900 bg-opacity-100 text-white rounded-3xl hover:bg-blue-700 text-xl font-semibold "
              >
                Register
              </button>
            </div>
          </form>
          <div className="w-full  flex items-center justify-center flex-col ">
            <p className="text-lg font-semibold text-bl my-4">
              Already have an Account?{" "}
              <Link to="/" className="text-blue-800 hover:text-blue-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
