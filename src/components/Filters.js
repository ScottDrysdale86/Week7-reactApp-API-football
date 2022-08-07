import React from "react";

const Filters = ({ seasons, onSeasonSelected, leagues, onLeagueSelected }) => {
	const handleSeasonChange = function (event) {
		const selectedSeason = seasons[event.target.value].year;
		onSeasonSelected(selectedSeason);
	};

	const seasonOptions = seasons.map((season, index) => {
		return (
			<option value={index} key={index}>
				{season.year}
			</option>
		);
	});

	const handleLeagueChange = function (event) {
		const selectedLeague = leagues[event.target.value].id;
		onLeagueSelected(selectedLeague);
	};

	const LeagueOptions = leagues.map((league, index) => {
		return (
			<option value={index} key={index}>
				{league.name}
			</option>
		);
	});

	return (
		<>
			<label className="season">Pick a League</label>
			<select
				className="league-select"
				defaultValue=""
				onChange={handleLeagueChange}
			>
				<option value="">Select a League...</option>
				{LeagueOptions}
			</select>

			<label className="season">Pick a Season</label>
			<select defaultValue="" onChange={handleSeasonChange}>
				<option value="">Select a Season...</option>
				{seasonOptions}
			</select>
		</>
	);
};

export default Filters;
