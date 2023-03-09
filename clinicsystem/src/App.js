
import "./App.css";
import "./LogIn";
import { LogIn } from "./LogIn";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AdminBoard } from "./AdminBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/AdminDashboard" element={<AdminBoard/>}/>
      </Routes>

      {/* <LogIn /> */}
    </>
  );
}

export default App;
