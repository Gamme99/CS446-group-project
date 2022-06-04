import React from "react";
import ftrData from "../data/features.json";
import Feature from "./Feature";

import "../css/Features.css";

function Features({ data }) {
	return (
		<div className="features-container">
			{data.map((feature) => {
				const { ref, text } = ftrData[feature];
				console.log(ref, text);
				return <Feature icon={ref} description={text}></Feature>;
			})}
		</div>
	);
}

export default Features;
