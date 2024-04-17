import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h2>
      ||SpeakEasy
      </h2>
      <div className="nav-items">
        <Link to="/home">Home</Link>
        <a href="#">Voices</a>
        <a href="#">Products</a>
        <Link to="/pricing">Pricing</Link>
        <a href="#">About Us</a>
      </div>
      <div className="end-text">
        <button type="button" className="btn btn-outline-warning login">
          Sign-Up
        </button>
        <FaCircleUser className="user-icon" />
      </div>
    </nav>
  );
};

export default Header;
