/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ResultChart from "./ResultChart";

const TeamDetail = ({ team, google }) => {
	return (
		<div className="details-box">
			<h2>{team.team.name}</h2>
			<img
				width="100px"
				src={team.team.logos[0].href}
				alt={"Team Logo"}
			></img>

			<ul>
				<li className="data">
					<b>Games Played:</b> {team.stats[3].value}
				</li>
				<li className="data">
					<b>W-D-L Record:</b> {team.stats[12].summary}
				</li>
				<li className="data">
					<b>Goals Scored:</b> {team.stats[4].value}
				</li>
				<li className="data">
					<b>Goals Conceded</b> {team.stats[5].value}
				</li>
				<li className="data">
					<b>Goal Difference:</b> {team.stats[9].value}
				</li>
				<li className="data">
					<b>Total Points:</b> {team.stats[6].value}
				</li>
				<li className="data">
					<ResultChart google={google} team={team} />
				</li>
			</ul>
		</div>
	);
};

export default TeamDetail;
