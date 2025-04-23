const PhoneBook = ({
	newName,
	newNumber,
	handleChange,
	handleSubmit,
	handleNumberChange,
	persons,
}) => {
	const existingPerson = persons.find((person) => person.name === newName);
	const ButtonText = existingPerson ? "Update" : "Add";
	return (
		<div>
			<h2>Add a new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<button type="submit">{ButtonText}</button>
			</form>
		</div>
	);
};

export default PhoneBook;
