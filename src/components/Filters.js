import React from "react";

const Filters = ({ seasons, onSeasonSelected }) => {
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
	return (
		<>
			<select defaultValue="" onChange={handleSeasonChange}>
				<option value="">Select a Season...</option>
				{seasonOptions}
			</select>
		</>
	);
};

export default Filters;
