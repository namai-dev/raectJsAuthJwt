import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import My3DComponent from "./Components/My3DComponent";
import Register from "./Components/Register";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashbord" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
