import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll and toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'blurred' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent', // 100% opaque transparent background
        transition: 'background-color 0.3s ease',
      }}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container">
        {/* Left Section */}
        <a className="navbar-brand" href="#" style={{ color: "#FFD700" }}>
          Portfolio
        </a>

        {/* Hamburger Menu Toggle Button */}
        <button
          className={`navbar-toggler ${isMenuOpen ? 'toggler-open' : ''}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Section */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} align-item-center justify-content-center`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievements" onClick={toggleMenu}>
                Achievement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certifications" onClick={toggleMenu}>
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
