import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav-bar ${isMenuOpen ? "active" : ""}`}>
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
        &#9776;
      </button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Nuevo Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;