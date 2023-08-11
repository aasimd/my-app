/** @format */

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";
import { ImageBanner } from "../../Components/ImageBanner/ImageBanner";

export const ContinentPage = () => {
	const navigate = useNavigate();
	const { ContinentName } = useParams();
	const { state, dispatch } = useContext(PageContext);
	const countryClickHandler = async (countryName) => {
		const findDestinations = await state?.countries?.find(
			(country) => country?.name === countryName
		).destinations;
		await dispatch({ type: "setDestinations", payload: findDestinations });
		setTimeout(() => navigate(`/country/${ContinentName}/${countryName}`), 100);
	};
	return (
		<div>
			<button onClick={() => navigate(-1)}>Back</button>
			<h1>Welcome to Trip Advisor</h1>
			<h2>Top Countries for your next Holiday</h2>
			<ul>
				{state?.countries?.map((country) => {
					const { name, image } = country;
					return (
						<li key={name} onClick={() => countryClickHandler(name)}>
							<ImageBanner name={name} image={image} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
