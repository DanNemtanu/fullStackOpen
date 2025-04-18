const express = require("express");
const app = express();
app.use(express.json());

let notes = [
	{
		id: "1",
		content: "HTML is easy",
		important: true,
	},
	{
		id: "2",
		content: "Browser can execute only JavaScript",
		important: false,
	},
	{
		id: "3",
		content: "GET and POST are the most important methods of HTTP protocol",
		important: true,
	},
];

app.get("/", (request, response) => {
	response.send("<h1>Nodemon is great!</h1>");
});

app.get("/api/notes", (request, response) => {
	console.log("Notes sent"), notes;
	debugger;
	response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
	const id = request.params.id;
	const note = notes.find((note) => note.id === id);

	if (note) {
		response.json(note);
	} else {
		response
			.status(404)
			.end("<h1>You do not have access to this resource !</h1>");
	}
});

app.post("/api/notes", (request, response) => {
	const maxID = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

	const note = request.body;
	note.id = String(maxID + 1);
	notes = notes.concat(note);
	response.json(note);
});

app.delete("/api/notes/:id", (request, response) => {
	const id = request.params.id;
	notes = notes.filter((note) => note.id !== id);
	response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
