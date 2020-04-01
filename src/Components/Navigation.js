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
    <li>
      <a href="https://github.com/thisprojects/main" rel="noopener noreferrer" target="_blank">
        Github
      </a>
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
    <div className="info">
      <p>Hosted With Firebase</p>
      <p>Built With React Router</p>
    </div>
  </header>
);

export default Title;
