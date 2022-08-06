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
	const [leagues, setLeagues] = useState([]);
	let [selectedLeague, setSelectedLeague] = useState("eng.1");

	const getLeagues = function () {
		fetch("https://api-football-standings.azharimm.site/leagues")
			.then((res) => res.json())
			.then((leagues) => setLeagues(leagues.data));
	};
	console.log(selectedLeague);

	// const getSeasons = function () {
	// 	fetch(
	// 		"https://api-football-standings.azharimm.site/leagues/"+ {selectedLeague}+"/seasons"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((seasons) => setSeasons(seasons.data.seasons));
	// };

	const getSeasons = useCallback(() => {
		fetch(
			"https://api-football-standings.azharimm.site/leagues/" +
				{ selectedLeague } +
				"/seasons"
		)
			.then((res) => res.json())
			.then((seasons) => setSeasons(seasons.data.seasons));
	}, [selectedLeague]);

	const getTeams = useCallback(() => {
		// console.log(selectedSeaon);
		console.log("usecallback" + selectedSeason);

		fetch(
			"https://api-football-standings.azharimm.site/leagues/" +
				{ selectedLeague } +
				"/standings?season=" +
				selectedSeason +
				"&sort=asc"
		)
			.then((res) => res.json())
			.then((teams) => setTeams(teams.data.standings));
	}, [selectedSeason, selectedLeague]);

	useEffect(() => {
		getLeagues();
		getSeasons();
		getTeams();
	}, [getTeams, getSeasons]);

	const onLeagueSelected = function (league) {
		setSelectedLeague(league);
	};

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
				<Filters
					seasons={seasons}
					onSeasonSelected={onSeasonSelected}
					leagues={leagues}
					onLeagueSelected={onLeagueSelected}
				/>
			</div>
			<Logo />
			<h1>{selectedSeason} League Table</h1>
			<div className="main-section">
				{selectedSeason && selectedLeague ? (
					<Table teams={teams} onTeamClick={onTeamClick} />
				) : null}
				{selectedTeam ? <Details team={selectedTeam} /> : null}
			</div>
		</>
	);
};

export default Container;
