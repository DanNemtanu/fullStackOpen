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
	const [errorMessage, setErrorMessage] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

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
			id: existingPerson ? existingPerson.id : (persons.length + 1).toString(),
		};
		if (existingPerson) {
			updatePerson(personObject.id, personObject)
				.then((updatedPerson) => {
					setSuccessMessage(`Updated ${updatedPerson.name}`);
					setPersons(
						persons.map((person) =>
							person.id !== existingPerson.id ? person : { ...personObject }
						)
					);
					setTimeout(() => {
						setSuccessMessage(null);
					}, 5000);
				})
				.catch((error) => {
					setErrorMessage(`Failed to update ${personObject.name}`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 5000);
				});
		} else {
			createPerson({
				...personObject,
			})
				.then((newPerson) => {
					setSuccessMessage(`Added ${newPerson.name}`);
					setTimeout(() => {
						setSuccessMessage(null);
					}, 5000);
					setPersons(persons.concat({ ...personObject }));
				})
				.catch((error) => {
					setErrorMessage(`Failed to add ${personObject.name}`);
					setTimeout(() => {
						setErrorMessage(null);
					}, 5000);
				});
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
			<h2>Alert Message</h2>
			{errorMessage && <div className="error">{errorMessage}</div>}
			{successMessage && <div className="success">{successMessage}</div>}
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
