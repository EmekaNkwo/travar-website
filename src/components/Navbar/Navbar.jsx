import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Travar</span>

        <ul className="navList">
          <li>
            <a href="#" className="navListLink">
              About
            </a>
          </li>
          <li>
            <a href="#" className="navListLink">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="navListLink">
              Destinations
            </a>
          </li>
          <li>
            <a href="#" className="navListLink">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navListLink">
              Contact
            </a>
          </li>
        </ul>

        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
