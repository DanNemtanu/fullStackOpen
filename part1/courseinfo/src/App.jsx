const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	console.log(props);
	return (
		<>
			<p>
				{props.content.name} {props.content.exercises}
			</p>
		</>
	);
};

const Content = (props) => {
	console.log(props);
	return (
		<>
			<Part content={props.part} />
		</>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content part={part1} />
			<Content part={part2} />
			<Content part={part3} />
			<Total exercises={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	);
};

export default App;
