import React from "react";
import { Link } from "react-router-dom";
import "../css/Banner.css";
import { Link } from "react-router-dom";
export default function Landing() {
<<<<<<< Updated upstream
	return (
		<div className="banner">
			<div className="banner-info">
				<h1>Where do you want to go? </h1>
				<input type="text" className="textbox" />
				<Link to="./listings">
					<button className="button" href="./listings">
						GO
					</button>
				</Link>
			</div>
		</div>
	);
=======
  return (
    <div className="banner">
      <div className="banner-info">
        <h1>Where do you want to go? </h1>
        <input type="text" className="textbox" />
        <Link to="./listings">
          <button className="button" href="./Rent">
            GO
          </button>
        </Link>
      </div>
    </div>
  );
>>>>>>> Stashed changes
}
