import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <ul>
          <Link to="/">
            <li className="noselect" link to="/">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="noselect" link to="/about">
              About
            </li>
          </Link>
          <Link to="/PHD">
            <li className="noselect">PHD/Research</li>
          </Link>
          {/* <Link to="/">
            <li className="noselect">Teaching</li>
          </Link>  */}
          <Link to="/NGO">
            <li className="noselect">NGO / Charity</li>
          </Link>
          <Link to="/gallery">
            <li className="noselect">Gallery</li>
          </Link>
          <Link to="/contact">
            <li className="noselect">Contanct</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
