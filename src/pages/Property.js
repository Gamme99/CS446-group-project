import React, { Component } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import Title from "../components/Title";
import "../css/Property.css";

export default class Property extends Component {
	render() {
		return (
			<Container>
				<img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"></img>
				<Title
					address={"6353 Juan Tabo Blvd NE"}
					cost={"$1250/month"}
					bedroom={2}
					bath={2}
				></Title>
				<Row>
					<Col id="left_column" className="column">
						<p className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque vel magni quisquam praesentium architecto maiores neque
							veritatis possimus odio beatae ducimus nemo aliquid consequatur
							ipsum quod quaerat ratione, quos tempora nisi accusamus
							perspiciatis? Nesciunt veritatis odit facere nulla corrupti dolor
							in molestiae expedita aliquam deserunt assumenda sequi tempore vel
							laborum officia incidunt officiis reiciendis aliquid neque soluta
							impedit, minus quas! Fugit harum eum expedita veritatis nemo
							deleniti incidunt est quia alias cum nisi provident cumque
							quisquam obcaecati illum, consectetur debitis officiis. Nesciunt
							tenetur reprehenderit laudantium, voluptate eaque et, ullam in
							velit repellat saepe quasi, est ea adipisci temporibus. Inventore,
							modi.
						</p>
					</Col>
					<Col id="right_column" className="column">
						<Card className="card">
							<Card.Header>Features</Card.Header>
							<Card.Body>
								<p>placeholder for features</p>
							</Card.Body>
						</Card>
						<Card className="card">
							<Card.Header>Contact</Card.Header>
							<Card.Body>
								<Card.Title>Central Park Apartments</Card.Title>
								<Card.Text>may be a component</Card.Text>
							</Card.Body>
						</Card>
						<Card className="card">
							<Card.Header>Google Maps</Card.Header>
							<Card.Body></Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
