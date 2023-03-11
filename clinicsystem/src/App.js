
import "./App.css";
import "./LogIn";
import { LogIn } from "./LogIn";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AdminBoard } from "./AdminBoard";
// import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<LogIn/>} />
        
        {/* <Route element = {<ProtectedRoutes/>}> */}
        <Route path="/Appointments" element={<AdminBoard/>}/>
        {/* </Route> */}
      </Routes>

      {/* <LogIn /> */}
    </>
  );
}

export default App;
