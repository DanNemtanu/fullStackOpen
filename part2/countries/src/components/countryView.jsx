const CountryView = ({ country }) => {
	const { name, capital, population, languages, flags, area, currencies } =
		country;
	const languagesList = Object.values(languages).join(", ");
	const curencyList = Object.keys(currencies).join(", ");

	return (
		<div>
			<h2>{name.official}</h2>
			<p>Capital: {capital}</p>
			<p>Area: {area}</p>
			<p>Population: {population}</p>
			<p>Languages: {languagesList}</p>
			<p>Currencies: {curencyList}</p>
			<img src={flags.png} alt={`Flag of ${name.common}`} />
		</div>
	);
};

export default CountryView;
// This component is responsible for displaying the details of a selected country.
