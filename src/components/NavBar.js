import React from "react";
import { Nav, Navbar, NavbarBrand, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<div className="home">
				<Link to="./">
					<NavbarBrand
						style={{
							marginRight: "20px",
							marginLeft: "40px",
							fontWeight: "bold",
							fontSize: "1.75em",
						}}
					>
						Residence Finder
					</NavbarBrand>
				</Link>
			</div>

			<div
				className="about ms-auto"
				style={{ marginRight: "5vh", fontSize: "1.25em", color: "#fff" }}
			>
				<Nav.Item>
					<Link to="./about">About</Link>
				</Nav.Item>
			</div>
		</Navbar>
	);
}
