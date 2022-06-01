import React from "react";
import { Container, Col } from "react-bootstrap";
import "../css/About.css";

export default function About() {
	return (
		<div>
			<Container>
				<Col md={{ span: 6, offset: 3 }} id="col">
					<h1 className="title">Residence Finder</h1>

					<p className="body">
						Created for the class CS446 at Central Washington University. The{" "}
						<a href="https://github.com/Gamme99/CS446-group-project">
							Github Repo
						</a>{" "}
						can be found at the link.
					</p>
				</Col>
			</Container>
		</div>
	);
}
