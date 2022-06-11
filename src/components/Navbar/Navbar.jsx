import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="navBar">
      <div className="navContainer">
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
          <a href="#"> {toggle ? <FaBars /> : <FaTimes />}</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
