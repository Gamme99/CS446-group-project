import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../css/Property.css";

export default class Property extends Component {
	render() {
		return (
			<Container>
				<Carousel variant="dark">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i.imgur.com/flFwYUG.png"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i.imgur.com/xyAmMwH.png"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i.imgur.com/Cms0ccg.png"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
				<h1 className="hello">hello</h1>
			</Container>
		);
	}
}
