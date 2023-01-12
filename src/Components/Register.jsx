import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Header";
import Logo from "./avator.png";
import { Helmet } from "react-helmet";
import axios from "axios";
// 127.0.0.1:9090/api/amazon/register

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const history = useNavigate();
  const url = "http://127.0.0.1:9090/api/amazon/register";

  // const onSubmit = (e) => {
  //   const url = "http://127.0.0.1:9090/api/amazon/register";
  //   e.preventDefault();

  //   const data = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     role: roles,
  //   };
  //   axios
  //     .post(url, data)
  //     .then((response) => console.log(response), history("/login"))
  //     .catch((err) => console.log(err));
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
      role: roles,
    };

    try {
      const responce = axios
        .post(url, data)
        .then((response) => {
          console.log(response.data);
          history("/login");
          alert(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(responce.data);
      // history("/login");
    } catch (error) {
      console.log(error);
    }
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
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="eml"
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="psw"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btny" onClick={onSubmit}>
            Register
          </button>
          <span>
            Already have an account <a href="">Login</a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
