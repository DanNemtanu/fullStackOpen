import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

export const getAllCountries = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

export const filterCountries = (country, data) => {
	const filteredCountries = data.filter((item) =>
		item.name.common.toLowerCase().includes(country.toLowerCase())
	);
	return filteredCountries;
};
