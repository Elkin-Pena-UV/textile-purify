import { Link } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback } from "react";
import "./Header.css";

const Header = () => {
  const { logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <header>
      <nav>
        <ul>
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
