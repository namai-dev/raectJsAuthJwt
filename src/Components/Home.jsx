import React, { Fragment } from "react";
import Header from "./Header";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="home">
        this is the home page
        <button>Login</button>
        <button>Register</button>
      </div>
    </Fragment>
  );
};

export default Home;
