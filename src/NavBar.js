import React from "react";
import { Nav, Navbar, NavbarBrand, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<Navbar bg="light">
			<Link to="./">
				<NavbarBrand
					style={{
						marginRight: "20px",
						marginLeft: "40px",
						fontWeight: "bold",
					}}
				>
					Residence Finder
				</NavbarBrand>
			</Link>

			<Stack direction="horizontal" gap={4}>
				<Nav.Item>
					<Link to="./rent">Rent</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="./property/1">Property (placeholder)</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="./about">About</Link>
				</Nav.Item>
			</Stack>
		</Navbar>
	);
}
