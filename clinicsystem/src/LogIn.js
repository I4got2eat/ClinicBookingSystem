import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AdminBoard } from "./AdminBoard";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { AdminMockDB } from "./AdminMockDB";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";




export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [logggedIn, setLoggedIn] = useState(false);
  const [CredentialWarning, setCredentialWarning] = useState(false);

  const handleApply = () => {
    console.log("triggered");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      setEmail(formik.values.email);
      handleLogIn(formik.values);
    },
  });

  const handleLogIn = (e) => {
    AdminMockDB.forEach((crediantials) => {
      if (
        crediantials.email === e.email &&
        crediantials.password === e.password
      ) {
        setLoggedIn(true);
        console.log("logged in")
      } else {
        setCredentialWarning(true);
      }
    });
  };
  let navigate = useNavigate();

  if (logggedIn) {
    // return <AdminBoard email={email} />;
    navigate(`/Appointments`)
    // return <Outlet/>
  }else{

  }

  return (
    <>
      <div className="background"></div>

      <div className="LogInWindow">
        <a href="/">
          <h1 className="title">Sourcery Clinic</h1>
        </a>
        <form onSubmit={formik.handleSubmit}>
          <fieldset className="logIn">
            <input
              onChange={formik.handleChange}
              id="email"
              className="email"
              placeholder="Email"
              type={"text"}
            ></input>

            <input
              onChange={formik.handleChange}
              id="password"
              className="password"
              placeholder="Password"
              type={"password"}
            ></input>
            {CredentialWarning ? (
              <div className="error">incorrect crediantials</div>
            ) : (
              <div className="error"></div>
            )}
            <div className="btns">
              <button
                disabled={false}
                className="logBtn btn firstBtn"
                type="submit"
              >
                Log in
              </button>
              <button
                className="btn regBtn"
                type="apply"
                onClick={() => handleApply}
              >
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

