import React from "react";
import NavBar from "../NavBar";
import "../css/Banner.css";

export default function Landing() {
	return (
		<div className="banner">
			<div className="banner-info">
				<h1>Where do you want to go? </h1>
				<input type="text" className="textbox" />
				<Link to="./Rent">
					<button className="button" href="./Rent">
						GO
					</button>
				</Link>
			</div>
		</div>
	);
}
