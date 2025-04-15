import { useState } from "react";

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ text, value }) => (
	<p>
		{text} : {value}
	</p>
);

const Statistics = ({ good, neutral, bad }) => {
	if (good === 0 && neutral === 0 && bad === 0) {
		return <p>No feedback given</p>;
	}
	return (
		<div>
			<StatisticsLine text="Good" value={good} />
			<StatisticsLine text="Neutral" value={neutral} />
			<StatisticsLine text="Bad" value={bad} />
			<StatisticsLine text="All" value={good + neutral + bad} />
			<StatisticsLine
				text="Average"
				value={Math.round(((good - bad) / (good + bad)) * 100) + " %"}
			/>
			<StatisticsLine
				text="Positive"
				value={Math.round((good / (good + neutral + bad)) * 100) + " %"}
			/>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	let allClicks = good + neutral + bad;
	return (
		<div>
			<h1>Give Feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="Good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="Bad" />
			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
