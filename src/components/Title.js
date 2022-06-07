import React from "react";
import PropTypes from "prop-types";
import "../css/Title.css";

export default function Title({ address, title, icon, link }) {
	return (
		<div>
			<div className="top-section">
				<p className="property address">{address}</p>
			</div>
			<hr />
			<div className="contact-container">
				<img src={icon} alt="leaser icon" className="contact-image" />
				<a href={link} className="contact-link">
					<div className="contact-title">{title}</div>
				</a>
			</div>
		</div>
	);
}

Title.propTypes = {
	address: PropTypes.string.isRequired,
	cost: PropTypes.string.isRequired,
	bedroom: PropTypes.string.isRequired,
	bath: PropTypes.string.isRequired,
};
