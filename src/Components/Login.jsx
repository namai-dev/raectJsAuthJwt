import React from "react";
import Logo from "./avator.png";
import { Helmet } from "react-helmet";
import { Fragment } from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://127.0.0.1:9090/login";

  const check = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    console.log(data);
  };

  const login = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(username);
    console.log(password);
    const res = axios
      .post(url, JSON.stringify({ username: username, password: password }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      // .post(url, {}, { params: { data } })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

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
          <input
            className="eml"
            type="email"
            placeholder="Enter Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="psw"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} className="btny">
            Login
          </button>
          <button className="btny" onClick={check}>
            Check
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
