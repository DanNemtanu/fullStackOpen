const FilterName = ({ filter, handleFilterChange }) => {
	return (
		<div>
			<h2>Search</h2>
			<input
				value={filter}
				onChange={handleFilterChange}
				placeholder="Search by name"
			/>
		</div>
	);
};

export default FilterName;
