const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	console.log(props.content);
	return (
		<>
			<p>
				{props.content.name} {props.content.exercises}
			</p>
		</>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part content={props.part[0]} />
			<Part content={props.part[1]} />
			<Part content={props.part[2]} />
		</div>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content part={parts} />
			<Total
				exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}
			/>
		</div>
	);
};

export default App;
