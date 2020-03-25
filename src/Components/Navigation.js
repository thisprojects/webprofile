import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/technology">Technology</Link>
    </li>
  </ul>
);

const Title = () => (
  <header>
    <div className="title">
      <h2>Nathan Downes</h2>
      <h3>Software Developer</h3>
      <NavItems />
    </div>
  </header>
);

export default Title;
