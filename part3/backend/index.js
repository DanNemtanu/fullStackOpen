const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morganBody = require("morgan-body");
const morgan = require("morgan");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));
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
		name: "Dan Nemtanu",
		number: "39-23-6423122",
	},
];

// Server entry point
app.get("/", (req, res) => {
	res.send("./dist/index.html");
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

app.put("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const updateData = req.body;

	try {
		persons[id] = updateData;
		res.status(201).end();
	} catch (error) {
		res.status(404).end();
	}
});

app.delete("/api/persons/:id", (req, res) => {
	const id = req.params.id;
	const personID = persons.findIndex((person) => person.id === id);
	console.log("ID", personID);

	try {
		persons.splice(personID, 1);
		res.status(204).end();
	} catch {
		res.status(404).end();
	}
});

app.post("/api/persons", (req, res) => {
	const body = req.body;
	const person = {
		id: body.id,
		name: body.name,
		number: body.number,
	};
	console.log(person);

	persons.push(person);
	res.status(201).end();
	return person;
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
