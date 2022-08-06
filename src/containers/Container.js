import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Table from "../components/Table";
import Details from "../components/Details";
import Filters from "../components/Filters";

const Container = () => {
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [seasons, setSeasons] = useState([]);
	let [selectedSeason, setSelectedSeason] = useState("");

	useEffect(() => {
		getSeasons();
		// getTeams();
	}, []);

	const onSeasonSelected = function (season) {
		setSelectedSeason(season);
		getTeams();
	};

	const getSeasons = function () {
		fetch(
			"https://api-football-standings.azharimm.site/leagues/eng.1/seasons"
		)
			.then((res) => res.json())
			.then((seasons) => setSeasons(seasons.data.seasons));
	};
	const getTeams = function () {
		console.log(selectedSeason);
		fetch(
			"https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=" +
				selectedSeason +
				"&sort=asc"
		)
			.then((res) => res.json())
			.then((teams) => setTeams(teams.data.standings));
	};

	const onTeamClick = (team) => {
		setSelectedTeam(team);
	};

	return (
		<>
			<Logo />
			<Filters seasons={seasons} onSeasonSelected={onSeasonSelected} />
			<h1>2021 League Table</h1>
			<div className="main-section">
				{selectedSeason ? (
					<Table
						teams={teams}
						onTeamClick={onTeamClick}
						getTeams={getTeams}
					/>
				) : null}
				{selectedTeam ? <Details team={selectedTeam} /> : null}
			</div>
		</>
	);
};

export default Container;
