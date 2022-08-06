import React, { useState, useEffect, useCallback } from "react";
import Logo from "../components/Logo";
import Table from "../components/Table";
import Details from "../components/Details";
import Filters from "../components/Filters";

const Container = () => {
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [seasons, setSeasons] = useState([]);
	let [selectedSeason, setSelectedSeason] = useState("");

	const getSeasons = function () {
		fetch(
			"https://api-football-standings.azharimm.site/leagues/eng.1/seasons"
		)
			.then((res) => res.json())
			.then((seasons) => setSeasons(seasons.data.seasons));
	};

	const getTeams = useCallback(() => {
		// console.log(selectedSeaon);
		console.log("usecallback" + selectedSeason);

		fetch(
			"https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=" +
				selectedSeason +
				"&sort=asc"
		)
			.then((res) => res.json())
			.then((teams) => setTeams(teams.data.standings));
	}, [selectedSeason]);

	useEffect(() => {
		getSeasons();
		getTeams();
	}, [getTeams]);

	const onSeasonSelected = function (season) {
		setSelectedSeason(season);
		getTeams();
	};

	const onTeamClick = (team) => {
		setSelectedTeam(team);
	};

	return (
		<>
			<div className="filters">
				<label className="season">Pick a Season</label>
				<Filters
					seasons={seasons}
					onSeasonSelected={onSeasonSelected}
				/>
			</div>
			<Logo />
			<h1>{selectedSeason} League Table</h1>
			<div className="main-section">
				{selectedSeason ? (
					<Table
						teams={teams}
						onTeamClick={onTeamClick}
						// getTeams={getTeams}
					/>
				) : null}
				{selectedTeam ? <Details team={selectedTeam} /> : null}
			</div>
		</>
	);
};

export default Container;
