import { Link } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { useState, useCallback } from "react";
import "./Header.css";

const Header = () => {
  // Extracts the logout function from the custom authentication store
  const { logout } = useAuthStore();

  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized function to handle logout, prevents unnecessary re-renders
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  // Toggles the mobile menu state between open and closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        {/* Menu toggle button for mobile screens, only shown on small screens */}
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Unicode character for a hamburger icon */}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {/* Navigation Links */}
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/pollution">Contaminación</Link>
          </li>
          <li>
            <Link to="/acidity">Acidez</Link>
          </li>
          <li>
            {/* Logout button with custom styling */}
            <button className="btnform" onClick={handleLogout}>
              <span>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
