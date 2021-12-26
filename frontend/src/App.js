import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./component/Chat";
import Login from "./component/login";
import Register from "./component/register";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
