import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;