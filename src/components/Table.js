import React from "react";
import Team from "./Team";

const Table = ({ teams, onTeamClick }) => {
	const team = teams.map((team, index) => {
		return <Team team={team} key={index} onTeamClick={onTeamClick} />;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Team</th>
					<th>Played</th>
					<th>Points</th>
				</tr>
			</thead>
			{team}
		</table>
	);
};

export default Table;
