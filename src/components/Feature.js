import React from "react";
import "../css/Feature.css";

export default function Feature({ icon, description }) {
	let filepath = "../img/" + icon;
	console.log(filepath);

	return (
		<div className="feature">
			<img
				src={require("../img/smoking-solid.png")}
				alt="thing"
				className="icon"
			/>
			<p className="feature-description">{description}</p>
		</div>
	);
}

// ../img/smoking-solid.png
// ../img/{icon}
// {icon}
// {icon} = filename for the icon, always.
