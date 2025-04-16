const calculateTotal = ({ course }) => {
	const total = course.parts.reduce((a, b) => a + b.exercises, 0);
	return total;
};

const Course = ({ courses }) => {
	return (
		<div>
			{courses.map((course) => (
				<div key={course.id}>
					<h1>{course.name}</h1>
					{course.parts.map((part) => (
						<p key={part.id}>
							{part.name} {part.exercises}
						</p>
					))}
					<b>Course Total: {calculateTotal({ course })} exercises</b>
				</div>
			))}
		</div>
	);
};

export default Course;
