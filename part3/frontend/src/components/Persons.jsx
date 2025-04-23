const Persons = ({ persons, handleDelete }) => {
	return (
		<div>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}
					<button onClick={() => handleDelete(person.id)}>Delete</button>
				</p>
			))}
		</div>
	);
};

export default Persons;
