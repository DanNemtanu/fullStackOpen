import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const hook = () => {
		console.log("Hook called");
		axios.get("http://localhost:3001/notes").then((response) => {
			console.log("Promise Fulfilled");
			setNotes(response.data);
		});
	};
	useEffect(hook, []);

	// ...
};

export default App;
