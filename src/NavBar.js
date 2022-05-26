import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<ul>
				<Nav>
					<Nav.Item>
						<Link to="./">Landing</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="./rent">Rent</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="./property">Property</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="./about">About</Link>
					</Nav.Item>
				</Nav>
			</ul>
		</div>
	);
}
