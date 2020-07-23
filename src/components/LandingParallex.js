import React from "react";
import "../App.css";

const LandingParallex = () => {
	return (
		<div
			class="parallax"
			style={{
				textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
			}}
		>
			<h1 className="landingparallex-maintext">
				<strong>Discover the best of Saigon</strong>
			</h1>
			<h3>Support local businesses</h3>
		</div>
	);
};

export default LandingParallex;
