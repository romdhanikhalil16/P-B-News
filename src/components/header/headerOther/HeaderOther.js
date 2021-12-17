import React, { useState } from "react";
import "./headerOther.css";
import { Link } from "react-router-dom";

const HeaderOther = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  return (
    <div className="container">
      <div className="topnav" style={{ backgroundColor: "black" }}>
        <Link to="/">Home</Link>
        <Link to="/cnn">CNN</Link>
        <Link to="/bbc">BBC</Link>
        <Link onClick={scrollToBottom} to="/">
          About
        </Link>
      </div>
    </div>
  );
};
export default HeaderOther;
