/** @format */

import React from "react";
import "./ImageBanner.css"
export const ImageBanner = ({ name, image }) => {
	return (
		<div className="image-container">
			<img src={image} alt={name} />
			<p>
				<i className="fa-solid fa-location-dot"></i> {name}
			</p>
		</div>
	);
};
