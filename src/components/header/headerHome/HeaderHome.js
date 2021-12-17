import React, { useState } from "react";
import "./headerHome.css";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [color, setColor] = useState("");

  const colorOnScroll = () => {
    if (window.scrollY <= 310) {
      setColor("transparent");
    } else setColor("black");
  };
  window.addEventListener("scroll", colorOnScroll);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  return (
    <div className="bg-img">
      <div className="container">
        <div className="topnav" style={{ backgroundColor: color }}>
          <Link to="/">Home</Link>
          <Link to="/cnn">CNN</Link>
          <Link to="/bbc">BBC</Link>
          <Link onClick={scrollToBottom} to="/">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderHome;
