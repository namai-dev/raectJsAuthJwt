import React from "react";
import Logo from "./avator.png";
import { Helmet } from "react-helmet";
import { Fragment } from "react";
import Header from "./Header";
const Login = () => {
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
          <input className="eml" type="text" placeholder="Enter Email" />
          <input className="psw" type="password" placeholder="Enter password" />
          <button className="btny">Login</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
