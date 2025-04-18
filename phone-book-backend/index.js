const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morganBody = require("morgan-body");
const morgan = require("morgan");

app.use(bodyParser.json());
morganBody(app);

let persons = [
	{
		id: "1",
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: "2",
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: "3",
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: "4",
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

// Server entry point
app.get("/", (req, res) => {
	res.send("<h1>Welcome to Express Server - Phonebook</h1>");
});
// Get all persons
app.get("/api/persons/", (req, res) => {
	res.json(persons);
});

// Get a person by ID
app.get("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const personToReturn = persons.find((person) => person.id === id);
	if (personToReturn) {
		try {
			res.json(personToReturn);
		} catch (error) {
			res.status(404).end();
		}
	} else {
		res.status(404).end();
	}
});

app.delete("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const personToDelete = persons.find((person) => person.id === id);
	if (personToDelete) {
		res.status(204).end();
	} else {
		res.status(404).end();
	}
});

app.post("/api/persons", (req, res) => {
	const body = req.body;
	const id = (persons.length + 1).toString();
	const existingPerson = persons.find((person) => person.name === body.name);
	const person = {
		id: id,
		name: body.name,
		number: body.number,
	};
	console.log(person);

	if (!body.name || !body.number || existingPerson) {
		return res.status(400).json({
			error: "Person already exists or missing name/number",
		});
	} else {
		res.status(200).json(person);
	}
});

app.get("/info", (req, res) => {
	const personsLength = persons.length;
	const date = new Date();
	const info = `<p>Phonebook has info for ${personsLength} people</p>
    <p>${date}</p>`;
	res.send(info);
});

// Creating the server on port 3001
app.listen(3001, () => {
	console.log(`Server running on port 3001`);
});
