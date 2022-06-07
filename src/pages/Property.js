import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import houseData from "../data/houses.json";

import Title from "../components/Title";
import Features from "../components/Features";
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
	const { address, bedroom, bathroom, option, features } = propertyData;

	// Create a currency formatter.
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	});

	// Format the price, append /month if the property is for rental.
	let price = formatter.format(propertyData.price);
	if (option == "Rent") price = price.concat("/month");

	return (
		<Container>
			<nav>hello lol</nav>
			<Row>
				<Col xs={6} id="left-col">
					<img
						src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
						alt="Picture of a home"
						className="property-image"
					></img>
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
				<Col id="right-col">
					<div className="section">
						<Title
							address={address}
							cost={price}
							bedroom={bedroom}
							bath={bathroom}
						></Title>
					</div>
					<div className="section">
						<h3 className="section-header">Features</h3>
						<hr />
						<Features data={features}></Features>
					</div>
					<div className="section">
						<h3 className="section-header">Contact</h3>
						<hr />
					</div>
					<div className="section">
						<h3 className="section-header">Google Maps</h3>
						<hr />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Property;
