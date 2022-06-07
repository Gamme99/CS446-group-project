import React from "react";
import PropTypes from "prop-types";
import "../css/Contact.css";

export default function Contact({ title, icon, link }) {
	return (
		<div className="contact-container">
			<img src={icon} alt="leaser icon" className="contact-image" />
			<a href={link} className="contact-title">
				{title}
			</a>
		</div>
	);
}

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
