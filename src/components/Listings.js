import React, { useState } from "react";
import houseData from "../data/houses.json";
import "../css/Listings.css";

export default function Listings(placeholder, data) {
	const [filteredHouses, setHouses] = useState([]);

	const handleRentClick = () => {
		const filtered = data.filter((value) => {
			console.log("prices: " + value.price);
			return value.price;
		});
		setHouses(filtered);
	};

	const handleBuyClick = () => {
		console.log("Buy clicked");
	};

	return (
		<div>
			<div className="filters">
				<div className="buy-rent">
					<input type="button" value="Rent"></input>
					<input type="button" value="Buy"></input>
				</div>
				<div className="price-filter">
					<h4 className="price-header">Price</h4>
					<input type="number" name="minimum" placeholder="min"></input>
					<input type="number" name="maximum" placeholder="max"></input>
				</div>
				<div className="bed-bath">
					<div className="bedroom">
						<h4 className="bed-header">Bedroom</h4>
						<input type="number" name="bedroom" placeholder="bed"></input>
					</div>
					<div className="bathroom">
						<h4 className="bath-header">Bathroom</h4>
						<input type="number" name="bathroom" placeholder="bath"></input>
					</div>
				</div>
			</div>
			<div className="order-by">
				<div className="order-title">Order by</div>
				<button className="orders">Price</button>
				<button className="orders">Bedroom</button>
				<button className="orders">Bathroom</button>
			</div>

			{/* <h5>size: {houseData.length}</h5> */}
			{houseData.map((value, key) => {
				return (
					<a href="./property">
						<div className="house-result">
							<div className="house-icon">
								<h3>picture</h3>
							</div>
							<div className="abb">
								<div>Address: {value.address}</div> <br />
								<div>Bedroom: {value.bedroom}</div>
								<br />
								<div>Bathroom: {value.bathroom}</div>
							</div>

							<div className="house-price">
								<p>
									{value.option}: ${value.price}
								</p>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}
