import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo">
          OPIUM VISUALS
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__links">Work</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__links">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

