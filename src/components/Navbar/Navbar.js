import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <div className={`topnav ${isMobileMenuOpen ? "responsive" : ""}`}>
        <Link className="active" to="/" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/counter" onClick={closeMobileMenu}>
          Counter
        </Link>
        <Link to="/calculator" onClick={closeMobileMenu}>
          Calculator
        </Link>
        <Link to="/quiz" onClick={closeMobileMenu}>
          Quiz App
        </Link>
        <Link to="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
        <button className="icon" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
