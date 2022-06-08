import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import houseData from "../data/houses.json";

import corporate from "../img/landmark-solid.png";
import individual from "../img/user-solid.png";

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
	const { address, bedroom, bathroom, option, features, contact } =
		propertyData;
	const { title, icon, link } = contact;

	// React handles passing images as props in a miserable manner.
	// As such, all images must be imported and kept in a dictionary like so to be passed into Contact.js
	const images = {
		corporate: corporate,
		individual: individual,
	};

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
		<Container fluid="xxl">
			<ul class="breadcrumb">
				<li>
					<a href="/listings">Washington</a>
				</li>
				<li>
					<a href="/listings">Ellensburg</a>
				</li>
				<li>{address}</li>
			</ul>
			<Row>
				<Col xs={6} id="left-col">
					<img
						src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
						alt="Picture of a home"
						className="property image"
					></img>

					<ListGroup horizontal className="stats-container">
						<ListGroupItem className="stats">{bedroom} Bedroom</ListGroupItem>
						<ListGroupItem className="stats">{bathroom} Bathroom</ListGroupItem>
						<ListGroupItem className="stats" id="price">
							{price}
						</ListGroupItem>
					</ListGroup>

					<p className="description">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ad
						asperiores nihil aperiam modi inventore earum, quod ipsum soluta
						illo corporis amet consequuntur in labore doloremque alias veniam
						est adipisci ipsam dolore dolor fugiat quidem. Ex nihil quisquam
						iure culpa obcaecati omnis at, rem quia, veritatis numquam sit
						voluptas eaque cumque accusantium hic eveniet sed nulla impedit
						dolores harum quidem. Deleniti eligendi officiis ipsum sapiente ex
						dolore, error fugiat enim dolor vel accusamus quibusdam amet id iure
						omnis facilis provident debitis in exercitationem assumenda?
						Molestias architecto, dolor ipsa quo minus earum error! Fugit
						dolorum voluptate, quo reiciendis dolore in blanditiis!
					</p>
				</Col>
				<Col id="right-col">
					<div className="section">
						<Title
							address={address}
							title={title}
							icon={images[icon]}
							link={link}
						></Title>
					</div>
					<div className="section">
						<h3 className="section-header">Features</h3>
						<hr />
						<Features data={features}></Features>
					</div>

					<div className="section">
						<h3 className="section-header">Comparatives</h3>
						<hr />

						<ListGroup flush id="comparative-list">
							<ListGroupItem className="comparative benefit">
								In a <i>10 mile</i> radius, this property is the closest one to
								Central Washington University.
							</ListGroupItem>
							<ListGroupItem className="comparative benefit">
								This property is reported to be recently renovated.
							</ListGroupItem>
							<ListGroupItem className="comparative negative">
								This property is <i>27%</i> more expensive compared to others
								just like it.
							</ListGroupItem>
						</ListGroup>
					</div>

					<div className="section">
						<h3 className="section-header">Google Maps</h3>
						<hr />
						<div className="map-container">
							<a
								href="https://www.google.com/maps/place/Central+Park/@47.015133,-120.5292847,18z/data=!4m5!3m4!1s0x5499f320b301d3d7:0x79e1ace4016bb8d7!8m2!3d47.0147252!4d-120.5278336"
								target="_blank"
							>
								<img
									className="map image"
									src="https://i.imgur.com/vS1aHrj.png"
									alt="maps location"
								/>
								<div className="div" style={{ position: "absolute" }}>
									<img
										src="https://i.imgur.com/NlKCD1N.png"
										alt="map link"
										className="map link"
									/>
								</div>
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Property;
