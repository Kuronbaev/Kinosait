  import React from "react";
  import { NavLink } from "react-router-dom";
  import "../../style/Header.css";
  const Home = () => {
    return (
      <header>
        <div className="container">
          <div className="header">
            <h1>Logo</h1>
            <div className="header-nav">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/popular"}>Popular</NavLink>
              <NavLink to={"/torated"}>ToRated</NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default Home;
