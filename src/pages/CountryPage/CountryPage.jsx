/** @format */

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";
import { ImageBanner } from "../../Components/ImageBanner/ImageBanner";

export const CountryPage = () => {
	const navigate = useNavigate();
	const { ContinentName, CountryName } = useParams();
	const { state, dispatch } = useContext(PageContext);
	const destinationClickHandler = async (destinationName) => {
		const findSelectedDestination = await state?.destinations?.find(
			(destination) => destination?.name === destinationName
		);
		await dispatch({
			type: "setSelectedDestination",
			payload: findSelectedDestination
		});
		setTimeout(
			() =>
				navigate(
					`/destination/${ContinentName}/${CountryName}/${destinationName}`
				),
			100
		);
	};
	return (
		<div><button onClick={() => navigate(-1)}>Back</button>
			<h1>Welcome to Trip Advisor</h1>
			<h2>Top Destinations for your next Holiday</h2>
			<ul>
				{state?.destinations?.map((country) => {
					const { name, image } = country;
					return (
						<li key={country?.id} onClick={() => destinationClickHandler(name)}>
							<ImageBanner name={name} image={image} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
