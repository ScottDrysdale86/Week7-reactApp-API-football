import { useEffect, useState } from "react";

function ResultChart({ google, team }) {
	const [chart, setChart] = useState(null);

	useEffect(() => {
		if (google && !chart) {
			// Create the data table.
			const data = new google.visualization.DataTable();
			data.addColumn("string", "Result");
			data.addColumn("number", "Number");
			data.addRows([
				["Win", parseInt(`${team.stats[0].value}`)],
				["Lose", parseInt(`${team.stats[1].value}`)],
				["Draw", parseInt(`${team.stats[2].value}`)],
			]);

			// Set chart options
			var options = {
				title: "Win-Lose-Draw",
				width: 250,
				height: 250,
				backgroundColor: "gray",
			};

			// Instantiate and draw our chart, passing in some options.
			const newChart = new google.visualization.PieChart(
				document.getElementById("resultChart")
			);
			newChart.draw(data, options);

			setChart(newChart);
		}
	}, [team, google, chart]);

	return (
		<>
			{!google}
			<div id="resultChart" className={!google ? "d-none" : ""} />
		</>
	);
}

export default ResultChart;
