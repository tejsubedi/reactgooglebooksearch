import React from "react";
import { Link } from "react-router-dom";

//This component is the Navbar which is rendered in App component displaying the links to all pages

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <ul style={{ "listStyleType": "none" }}>
        <li>
          <img src="../images/books.jpg" alt="Book"></img>
        </li>
        <li>
          <h3>Google Books</h3>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/Search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
            </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Saved"
            className={
              window.location.pathname === "/Saved" || window.location.pathname === "/Saved"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved
            </Link>

        </li>

      </ul>
    </nav>
  );
}

export default Navbar;


