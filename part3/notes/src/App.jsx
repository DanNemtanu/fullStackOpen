import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const hook = () => {
		console.log("Hook called");
		axios.get("http://localhost:3001/api/notes").then((response) => {
			console.log("Promise Fulfilled");
			setNotes(...notes, response.data);
		});
	};
	useEffect(hook, []);
	// ...

	return (
		<div>
			<h1>Notes</h1>
			{notes.map((note) => (
				<p key={note.id}>
					{note.content}: {note.important.toString()}
				</p>
			))}
		</div>
	);
};

export default App;
