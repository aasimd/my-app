/** @format */

import React from "react";
import { createContext, useReducer } from "react";
import { data } from "../data";

export const PageContext = createContext();

const reducerFunction = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "setCountries":
			return { ...state, countries: [...payload] };
		case "setDestinations":
			return { ...state, destinations: [...payload] };
		case "setSelectedDestination":
			return { ...state, selectedDestination: { ...payload } };
		default:
			return state;
	}
};

export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		travelData: [...data.continents],
		countries: [],
		destinations: [],
		selectedDestination: {}
	});
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{children}
		</PageContext.Provider>
	);
};
