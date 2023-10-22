import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">RoboRashtra</a></li>
        <li className="navbar-item"><a href="/">Events</a></li>
        <li className="navbar-item"><a href="/">Teams</a></li>
        <li className="navbar-item"><a href="/">Sponsor</a></li>
        <li className="navbar-item"><a href="/">Our Clan</a></li>
        <li className="navbar-item login"><a href="/">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
