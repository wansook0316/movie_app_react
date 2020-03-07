import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// Link를 사용하기 위해서는 해당 React Component가 HashRoute component 안에 있어야 한다.
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
