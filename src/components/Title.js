import React from "react";
import PropTypes from "prop-types";
import "../css/Title.css";

export default function Title({ address, cost, bedroom, bath }) {
	return (
		<div>
			<div className="top-section">
				<p className="property address">{address}</p>
				<p className="breadcrumbs">Washington / Ellensburg</p>
			</div>
			<hr />
			<p className="property details">
				{cost}, {bedroom} Bedrooms, {bath} Bath
			</p>
		</div>
	);
}

Title.propTypes = {
	address: PropTypes.string.isRequired,
	cost: PropTypes.string.isRequired,
	bedroom: PropTypes.string.isRequired,
	bath: PropTypes.string.isRequired,
};
