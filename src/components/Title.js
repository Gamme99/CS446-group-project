import React from "react";
import PropTypes from "prop-types";
import "../css/Title.css";

export default function Title({ address, title, icon, link }) {
	return (
		<div>
			<div className="top-section">
				<a
					href="https://www.google.com/maps/place/Central+Park/@47.015133,-120.5292847,18z/data=!4m5!3m4!1s0x5499f320b301d3d7:0x79e1ace4016bb8d7!8m2!3d47.0147252!4d-120.5278336"
					target="_blank"
					className="property address"
				>
					{address}
				</a>
			</div>
			<hr />
			<div className="contact-container">
				<img src={icon} alt="leaser icon" className="contact-image" />
				<a href={link} target="_blank" className="contact-link">
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
