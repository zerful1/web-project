import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Nav(props) {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <h2>
        <Link to="/">Awesome Website</Link>
      </h2>
      <div className="right-nav">
        {isLoggedIn ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Nav;
