import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getPersons = () => {
	const promise = axios.get(baseUrl);
	return promise.then((response) => response.data);
};

const createPerson = (newPerson) => {
	console.log("Creating person:", newPerson);
	const request = axios.post(baseUrl, newPerson);
	return request.then((response) => response.data);
};

const updatePerson = (id, newPerson) => {
	const request = axios.put(`${baseUrl}/${id}`, newPerson);
	return request.then((response) => response.data);
};

const deletePerson = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`);
	return request.then((response) => console.log(response));
};

export { getPersons, createPerson, updatePerson, deletePerson };
