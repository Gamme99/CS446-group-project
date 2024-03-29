import React from "react";
import "../css/Feature.css";

export default function Feature({ icon, description }) {
	return (
		<div className="feature">
			<img src={icon} alt={description} className="icon" />
			<div className="outer-div">
				<p className="feature-description">{description}</p>
			</div>
		</div>
	);
}
