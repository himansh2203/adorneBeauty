import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDropdown = () => setServicesDropdown(!servicesDropdown);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Salon Bliss</div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="dropdown-parent"
          >
            <a href="#services">Services ▾</a>
            {servicesDropdown && (
              <ul className="dropdown">
                <li>
                  <a href="#hair">Hair</a>
                </li>
                <li>
                  <a href="#skin">Skin</a>
                </li>
                <li>
                  <a href="#spa">Spa</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/aboutUs">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="book-btn">Book Now</button>
          </li>
          <li className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
