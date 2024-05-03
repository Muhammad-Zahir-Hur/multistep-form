import icon from "../assets/images/icon-thank-you.svg";

import React from "react";

function Thankyou() {
	return (
		<div className="thanks-container">
			<img src={icon} alt="Thanks Icon" className="thanks-icon" />
			<h1 className="main-heading">Thank You!</h1>
			<p className="thanks-para">
				Lorem ipsum dolor sit amet consectetur, aliquam similique voluptates
				quam excepturi, recusandae quibusdam numquam soluta neque eveniet!
				Corporis, quisquam sapiente.
			</p>
		</div>
	);
}

export default Thankyou;
