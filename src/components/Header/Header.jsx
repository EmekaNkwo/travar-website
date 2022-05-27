import "./Header.css";
import * as FaIcon from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaIcon.FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaIcon.FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaIcon.FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FaIcon.FaBed />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaIcon.FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for travels - unlock instant savings of 10% or more with
          a free Travar account.
        </p>
        <button className="headerButton"> Sign In / Register</button>
      </div>
    </div>
  );
}

export default Header;
