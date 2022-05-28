import React from "react";
import PropTypes from "prop-types";

export default function Title({ address, cost, bedroom, bath }) {
	return (
		<div>
			<p className="property address">{address}</p>
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
	bedroom: PropTypes.number.isRequired,
	bath: PropTypes.number.isRequired,
};
