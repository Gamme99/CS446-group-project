import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <ul>
        <Nav>
          <Nav.Link href="./Banner.js"> Landing</Nav.Link>
          <Nav.Link href="./Rent.js"> Rent</Nav.Link>
          <Nav.Link href="./Property.js"> Property</Nav.Link>
          <Nav.Link href="./About.js"> About</Nav.Link>
          {/* <li>
            {" "}
            <Link to="/"> Landing</Link>
            {""}
          </li>
          <li>
            {" "}
            <Link to="/Rent"> Rent</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Property"> Property</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/About"> About</Link>{" "}
          </li> */}
        </Nav>
      </ul>
    </div>
  );
}
