
import "./App.css";
import "./LogIn";
import { LogIn } from "./LogIn";
import { useState } from "react";
import { Routes, Route, Link, Navigate} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { AdminBoard } from "./AdminBoard";
// import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<AdminBoard/>}/>
        <Route path="/login" element={<LogIn/>} />

        <Route 
          path="/"
          element={ <Navigate to="/login"/> }
        />
{/*         
        <Route element = {<ProtectedRoutes/>}>
        <Route path="/Appointments" element={<AdminBoard/>}/>
        </Route> */}
      </Routes>

    </>
  );
}

export default App;
