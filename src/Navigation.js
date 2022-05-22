import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul>
      <li>
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
      </li>
    </ul>
  );
}
