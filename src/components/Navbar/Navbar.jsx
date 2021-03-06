import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      <div className="navContainer">
        <nav className="navBar">
          <div className="logo">Travar</div>

          <ul className={toggle ? "navList" : "navList active"}>
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
                Trip Planner
              </a>
            </li>

            <li>
              <a href="#" className="navListLink">
                Contact
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={handleToggle}>
            {/* eslint-disable-next-line*/}
            <div className="hamIcon"> {toggle ? <FaBars /> : <FaTimes />}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
