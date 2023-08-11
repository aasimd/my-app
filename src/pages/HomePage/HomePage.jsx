/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";
import { ImageBanner } from "../../Components/ImageBanner/ImageBanner";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(PageContext);
	const { travelData } = state;
	const continentClickHandler = (continentName) => {
		const findCountries = state?.travelData?.find(
			(continent) => continent.name === continentName
		).countries;
		dispatch({ type: "setCountries", payload: findCountries });
		setTimeout(() => navigate(`/continent/${continentName}`), 100);
	};
	return (
		<div>
			<h1>Welcome to Trip Advisor</h1>
			<h2>Top Continents for your next Holiday</h2>
			<ul>
				{travelData?.map((continent) => {
					const { name, image } = continent;
					return (
						<li
							onClick={() => {
								continentClickHandler(name);
							}}
						>
							<ImageBanner name={name} image={image} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
