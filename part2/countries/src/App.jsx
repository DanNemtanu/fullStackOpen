import { useState, useEffect } from "react";
import { getAllCountries, filterCountries } from "./services/backend";
import CountryView from "./components/countryView";

const App = () => {
	const [country, setCountry] = useState(null);
	const [countryData, setCountryData] = useState(null);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		getAllCountries().then((data) => {
			setCountryData(data);
		});
	}, []);

	const handleCountryChange = (event) => {
		event.preventDefault();
		const country = event.target.value;
		setCountry(country);
		if (countryData) {
			const foundCountries = filterCountries(country, countryData);
			setFilter(foundCountries);
		}
		console.log(filter);
	};

	return (
		<div>
			<h1>Countries Data</h1>
			<p>
				<span>Find countries </span>
				<input
					type="text"
					placeholder="Start typing the country name..."
					value={country ? country : ""}
					onChange={handleCountryChange}
				/>
			</p>
			{filter.length < 10 ? (
				filter.map((item) => (
					<p>
						<span key={item.name.common}>{item.name.common}</span>
						<button text="Show" onClick={() => setFilter([item])}>
							Show
						</button>
					</p>
				))
			) : country ? (
				<p>To many matches</p>
			) : (
				""
			)}
			{countryData ? (
				country ? (
					""
				) : (
					<p>Type to search</p>
				)
			) : (
				<p>Fetching Data ... </p>
			)}

			{filter.length === 1 && <CountryView country={filter[0]} />}
		</div>
	);
};

export default App;
