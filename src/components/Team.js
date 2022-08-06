import React from "react";

const Team = ({ team, onTeamClick }) => {
	const handleClick = () => {
		onTeamClick(team);
	};

	return (
		<>
			<tbody>
				<tr>
					<td className="name" onClick={handleClick}>
						{team.team.name}
					</td>
					<td className="data">{team.stats[3].value}</td>
					<td className="data">{team.stats[6].value}</td>
				</tr>
			</tbody>
		</>
	);
};

export default Team;
