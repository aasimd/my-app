/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ContinentPage } from "./pages/ContinentPage/ContinentPage";
import { CountryPage } from "./pages/CountryPage/CountryPage";
import { DestinationPage } from "./pages/DestinationPage/DestinationPage";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/continent/:ContinentName" element={<ContinentPage />} />
				<Route
					path="/country/:ContinentName/:CountryName"
					element={<CountryPage />}
				/>
				<Route
					path="/destination/:ContinentName/:CountryName/:DestinationName"
					element={<DestinationPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
