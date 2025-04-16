import { useState, useEffect } from "react";
import PhoneBook from "./components/PhoneBook";
import FilterName from "./components/FilterName";
import Persons from "./components/Persons";
import {
	createPerson,
	updatePerson,
	deletePerson,
	getPersons,
} from "./services/backendServices";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		getPersons()
			.then((allPersons) => setPersons(allPersons))
			.catch((error) => {
				console.log("Error fetching data:", error);
			});
	}, []);

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		setNumber(event.target.value);
	};
	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const existingPerson = persons.find((person) => person.name === newName);
		const personObject = {
			name: newName,
			number: newNumber,
		};
		if (existingPerson) {
			console.log("Updating person:", existingPerson, existingPerson.id);
			updatePerson(existingPerson.id, personObject);
			setPersons(
				persons.map((person) =>
					person.id !== existingPerson.id
						? person
						: { ...person, number: newNumber }
				)
			);
		} else {
			createPerson({
				...personObject,
				id: (persons.length + 1).toString(),
			});
			setPersons(persons.concat({ name: newName, number: newNumber }));
		}
		setNewName("");
		setNumber("");
	};

	const handleDelete = (id) => {
		deletePerson(id);
		setPersons(persons.filter((person) => person.id !== id));
	};

	const filteredPersons =
		filter === ""
			? persons
			: persons.filter((person) =>
					person.name.toLowerCase().includes(filter.toLowerCase())
			  );

	return (
		<div>
			<FilterName filter={filter} handleFilterChange={handleFilterChange} />
			<PhoneBook
				persons={persons}
				newName={newName}
				newNumber={newNumber}
				handleChange={handleNameChange}
				handleSubmit={handleSubmit}
				handleNumberChange={handleNumberChange}
			/>

			<Persons persons={filteredPersons} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
