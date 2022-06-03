import React, { useState } from "react";
import "../css/Feature.css";

export default function Feature({ icon, description }) {
	return (
		<div className="feature">
			<img src="https://i.imgur.com/5MwZvdq.png" alt="thing" className="icon" />
			<p className="feature-description">{description}</p>
		</div>
	);
}
