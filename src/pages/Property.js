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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
							fugit rerum autem hic architecto ad voluptatibus aut! Natus, non
							quas laboriosam ipsum sapiente et pariatur ipsa officiis incidunt
							rerum. Nisi, libero fugit, facere perspiciatis dignissimos
							asperiores laudantium suscipit dolor, pariatur earum ut. Quam
							aliquam illo mollitia quo provident omnis molestiae.
						</p>
					</Col>
					<Col id="right_column" className="column">
						<Card className="card">
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card className="card">
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card className="card">
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
