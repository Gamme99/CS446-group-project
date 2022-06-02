import React from "react";
import {
	Carousel,
	Container,
	Row,
	Col,
	Card,
	Button,
	CarouselItem,
} from "react-bootstrap";
import {} from "react-router-dom";

import houseData from "../data/houses.json";

import Title from "../components/Title";
import "../css/Property.css";

const Property = () => {
	// Obtains the house ID from the url.
	let url = window.location.href;
	const propertyId = url.substring(url.search("property") + 9);

	// Retrieves data from houseData by finding the entry with the matching ID.
	const propertyData = houseData.filter((data) => {
		return data.id == propertyId;
	})[0];

	// Error checking
	if (!propertyData) {
		return <h1 className="error">Invalid property ID provided.</h1>;
	} else if (
		!propertyData.address ||
		!propertyData.bedroom ||
		!propertyData.bathroom ||
		!propertyData.price
	) {
		return <h1 className="error">Incomplete data provided.</h1>;
	}

	// Destructures the data.
	const { address, bedroom, bathroom, price } = propertyData;

	return (
		<Container>
			<Carousel variant="dark">
				<CarouselItem>
					<img
						src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
						alt="Picture of a home"
					></img>
				</CarouselItem>
			</Carousel>
			<Title
				address={address}
				cost={price}
				bedroom={bedroom}
				bath={bathroom}
			></Title>
			<Row>
				<Col id="left_column" className="column">
					<p className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						vel magni quisquam praesentium architecto maiores neque veritatis
						possimus odio beatae ducimus nemo aliquid consequatur ipsum quod
						quaerat ratione, quos tempora nisi accusamus perspiciatis? Nesciunt
						veritatis odit facere nulla corrupti dolor in molestiae expedita
						aliquam deserunt assumenda sequi tempore vel laborum officia
						incidunt officiis reiciendis aliquid neque soluta impedit, minus
						quas! Fugit harum eum expedita veritatis nemo deleniti incidunt est
						quia alias cum nisi provident cumque quisquam obcaecati illum,
						consectetur debitis officiis. Nesciunt tenetur reprehenderit
						laudantium, voluptate eaque et, ullam in velit repellat saepe quasi,
						est ea adipisci temporibus. Inventore, modi.
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
};

export default Property;
