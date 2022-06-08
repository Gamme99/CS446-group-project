import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import houseData from "../data/houses.json";
import "../css/Listings.css";

export default function Listings() {
	const [filteredHouses, setHouses] = useState([]);
	const [min, setMin] = useState("");
	const [max, setMax] = useState("");
	const [bedroom, setBedroom] = useState("");
	const [bathroom, setBathroom] = useState("");

	//   setHouses(houseData);
	let flag = false;
	const handleBuyClick = (button) => {
		const filtered = houseData.filter((value) => value.option === button);
		// console.log("here");
		// console.log(filtered.length);
		setHouses(filtered);
		flag = true;
	};

	const handleRentClick = (button) => {
		const filtered = houseData.filter((value) => value.option === button);
		// console.log("down here");
		// console.log(filtered.length);

		setHouses(filtered);
		flag = true;
	};

	const handleApply = (event) => {
		event.preventDefault();
		// const input = { min, max, bedroom, bathroom };
		// console.log(input.min, input.bedroom);

		// let filtered = houseData.filter((value) => {
		//   if (value.min != null && value.min != 0) {
		//     return value.min >= input.min;
		//   }
		// });

		// filtered = filtered.filter((value) => {
		//   if (value.max != null && value.max != 0) {
		//     return value.max <= input.max;
		//   }
		// });

		// let filtered = houseData.filter((value) => {
		//   if (value.bedroom != null && value.bedroom != 0) {
		//     return value.bedroom === input.bedroom;
		//   }
		// });

		// filtered = filtered.filter((value) => {
		//   if (value.bathroom != null && value.bathroom != 0) {
		//     return value.bathroom === input.bathroom;
		//   }
		// });

		// setHouses(filtered);
	};

	// Populate the list on mount.
	useEffect(() => {
		setHouses(houseData);
		flag = true;
	}, []);

	return (
		<div>
			<form className="listing filters">
				<div className="listing buy-rent">
					<button
						type="button"
						value="Rent"
						onClick={() => {
							handleRentClick("Rent");
						}}
					>
						{" "}
						Rent
					</button>
					<button
						type="button"
						value="Buy"
						onClick={() => {
							handleBuyClick("Buy");
						}}
					>
						{" "}
						Buy
					</button>
				</div>

				<div>
					<div className="listing forms" onClick={handleApply}>
						<div className="listing price-filter">
							<h4 className="listing price-header">Price</h4>
							<input
								type="number"
								name="minimum"
								placeholder="min"
								value={min}
								onChange={(e) => setMin(e.target.value)}
							></input>
							<input
								type="number"
								name="maximum"
								placeholder="max"
								value={max}
								onChange={(e) => setMax(e.target.value)}
							></input>
						</div>
						<div className="listing bed-bath">
							<div className="listing bedroom">
								<h4 className="listing bed-header">Bedroom</h4>
								<input
									type="number"
									name="bedroom"
									placeholder="bed"
									value={bedroom}
									onChange={(e) => setBedroom(e.target.value)}
								></input>
							</div>
							<div className="listing bathroom">
								<h4 className="listing bath-header">Bathroom</h4>
								<input
									type="number"
									name="bathroom"
									placeholder="bath"
									value={bathroom}
									onChange={(e) => setBathroom(e.target.value)}
								></input>
							</div>
						</div>

						<div className="listing apply-filter" id="apply-filter">
							<button type="submit" value="Apply">
								Apply
							</button>
						</div>
					</div>
				</div>
			</form>
			<div className="listing order-by">
				<div className="listing order-title">Order by</div>
				<button
					className="listing orders"
					onClick={() =>
						filteredHouses.sort((a, b) => {
							return a.price - b.price;
						})
					}
				>
					Price
				</button>
				<button className="listing orders">Bedroom</button>
				<button className="listing orders">Bathroom</button>
			</div>

			{filteredHouses.map((value) => {
				let url = "/property/" + value.id;
				return (
					<Link to={url}>
						<div className="listing house-result">
							<div className="listing house-icon">
								<h3>picture</h3>
							</div>
							<div className="listing abb">
								<div>Address: {value.address}</div> <br />
								<div>Bedroom: {value.bedroom}</div>
								<br />
								<div>Bathroom: {value.bathroom}</div>
							</div>

							<div className="listing house-price">
								<p>
									{value.option}: ${value.price}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
