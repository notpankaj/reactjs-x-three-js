import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/one">Geometry</Link>
      <br />
      <Link to="/two">DataGui</Link>
      <br />
      <Link to="/three">three</Link>
    </div>
  );
};

export default Menu;
