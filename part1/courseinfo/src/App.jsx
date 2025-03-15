const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	console.log(props);
	return (
		<>
			<p>
				{props.content.part} {props.content.exercises}
			</p>
		</>
	);
};

const Content = (props) => {
	console.log(props);
	return (
		<>
			<Part content={props.part[0]} />
			<Part content={props.part[1]} />
			<Part content={props.part[2]} />
		</>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	const partArray = [
		{ part: part1, exercises: exercises1 },
		{ part: part2, exercises: exercises2 },
		{ part: part3, exercises: exercises3 },
	];

	return (
		<div>
			<Header course={course} />
			<Content part={partArray} />
			<Total exercises={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
