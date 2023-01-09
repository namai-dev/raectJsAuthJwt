import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Logo from "./avator.png";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <Fragment>
      <Header />
      <div className="login_form">
        <Helmet>
          <style>
            {
              "body { background-color: #222; color: #fff;  background: url(C:Users\namaiMusicmy_applsrcComponents\bg-2.jpg)}"
            }
          </style>
        </Helmet>

        <div className="imageContainer">
          <img src={Logo} alt="" />
        </div>

        <div className="container">
          <input className="eml" type="text" placeholder="Enter Username" />
          <input className="eml" type="text" placeholder="Enter Email" />
          <input className="psw" type="password" placeholder="Enter password" />
          <button className="btny">Register</button>
          <span>
            Already have an account <a href="">Login</a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
