import React, { useState, useEffect, useCallback } from "react";
import Logo from "../components/Logo";
import Table from "../components/Table";
import Details from "../components/Details";
import Filters from "../components/Filters";

const Container = ({ google }) => {
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(null);
	const [seasons, setSeasons] = useState([]);
	let [selectedSeason, setSelectedSeason] = useState("");
	const [leagues, setLeagues] = useState([]);
	let [selectedLeague, setSelectedLeague] = useState("eng.1");
	const [logo, setLogo] = useState({});

	const getLogo = useCallback(
		function () {
			fetch(
				"https://api-football-standings.azharimm.site/leagues/" +
					selectedLeague
			)
				.then((res) => res.json())
				.then((logo) => setLogo(logo.data.logos));
		},
		[selectedLeague]
	);

	const getTeams = useCallback(
		function () {
			fetch(
				"https://api-football-standings.azharimm.site/leagues/" +
					selectedLeague +
					"/standings?season=" +
					selectedSeason +
					"&sort=asc"
			)
				.then((res) => res.json())
				.then((teams) => setTeams(teams.data.standings));
		},
		[selectedLeague, selectedSeason]
	);

	const getSeasons = useCallback(
		function () {
			fetch(
				"https://api-football-standings.azharimm.site/leagues/" +
					selectedLeague +
					"/seasons"
			)
				.then((res) => res.json())
				.then((seasons) => setSeasons(seasons.data.seasons));
			getTeams();
		},
		[getTeams, selectedLeague]
	);

	const getLeagues = useCallback(
		function () {
			fetch("https://api-football-standings.azharimm.site/leagues")
				.then((res) => res.json())
				.then((leagues) => setLeagues(leagues.data));
			getLogo();
			getSeasons();
		},
		[getLogo, getSeasons]
	);

	useEffect(() => {
		getLeagues();
		getSeasons();
	}, [getLeagues, getSeasons]);

	const onLeagueSelected = function (league) {
		setSelectedLeague(league);
		getLogo();
		getSeasons();
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
			<Logo logo={logo} />
			<h1>{selectedSeason} League Table</h1>
			<div className="main-section">
				{selectedSeason && selectedLeague ? (
					<Table teams={teams} onTeamClick={onTeamClick} />
				) : null}
				{selectedTeam ? (
					<Details team={selectedTeam} google={google} />
				) : null}
			</div>
		</>
	);
};

export default Container;
