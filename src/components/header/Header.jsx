import { Link } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback } from "react";

const Header = () => {
  const { logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div className="container-header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/pollution">Pollution</Link>
          </li>
          <li>
            <Link to="/acidity">Acidity</Link>
          </li>
          <li>
            <button className="btnform" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
