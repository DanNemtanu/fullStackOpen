import axios from "axios";

const baseUrl = "/api/persons";

const getPersons = () => {
	const promise = axios.get(baseUrl);
	return promise.then((response) => response.data);
};

const createPerson = (newPerson) => {
	const promise = axios.post(baseUrl, newPerson);
	return promise.then((response) => response.data);
};

const updatePerson = (id, newPerson) => {
	const promise = axios.put(`${baseUrl}/${id}`, newPerson);
	return promise;
};

const deletePerson = (id) => {
	console.log("Deleting Person", id);
	const request = axios.delete(`${baseUrl}/${id}`);
	return request;
};

export { getPersons, createPerson, updatePerson, deletePerson };
