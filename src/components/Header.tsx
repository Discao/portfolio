import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import { motion } from "framer-motion"; // Import motion from framer-motion
import Logo from '/users/jean/portfolio/src/assets/logo-2.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 0.9, ease: "easeInOut" }} // Animation settings
    >
      <div className="header-content">
        {/* Logo on the left */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Hamburger Icon on the right */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Default menu for desktop */}
        <div className="menu">
          <a href="#sobre-nos" className="menu-item">Sobre nós</a>
          <button className="contrate-button">Contrate</button>
        </div>

        {/* Full-screen overlay menu for mobile */}
        <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`}>
          <div className="menu-content">
            <a href="#sobre-nos" className="menu-item">Sobre nós</a>
            <button className="contrate-button">Contrate</button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;