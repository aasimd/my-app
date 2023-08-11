/** @format */
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContext } from "../../Context/PageContext";

export const DestinationPage = () => {
	const navigate = useNavigate();
	const { state, dispatch } = useContext(PageContext);
	const { selectedDestination } = state;
	const {
		id,
		name,
		description,
		image,
		ratings,
		reviews,
		location,
		openingHours,
		ticketPrice,
		website
	} = selectedDestination;
	return (
		<div>
			<button onClick={() => navigate(-1)}>Back</button>
			<h1>{name}</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					allignItems: "center",
					gap: "2rem"
				}}
			>
				<div className="image-container" style={{ width: "450px" }}>
					<img src={image} alt={name} />
				</div>
				<div style={{ width: "450px", textAlign: "left" }}>
					<p>
						<b>Description:</b> {description}
					</p>
					<p>
						<b>Ratings:</b> {ratings}
					</p>
					<p>
						<b>Reviews:</b> {reviews}
					</p>
					<p>
						<b>Location:</b> {location}
					</p>
					<p>
						<b>Opening Hours:</b> {openingHours}
					</p>
					<p>
						<b>Ticket Price:</b> {ticketPrice}
					</p>
					<a href={website}>website</a>
				</div>
			</div>
		</div>
	);
};
