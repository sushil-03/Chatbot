import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./component/Chat";
import Login from "./component/Login";
import Register from "./component/Register";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/chatbot" element={<Chat />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
