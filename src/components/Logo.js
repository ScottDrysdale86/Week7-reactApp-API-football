import React, { useState, useEffect } from "react";

const Logo = () => {
	const [logo, setLogo] = useState({});

	useEffect(() => {
		getLogo();
	}, []);

	const getLogo = function () {
		fetch("https://api-football-standings.azharimm.site/leagues/eng.1")
			.then((res) => res.json())
			.then((logo) => setLogo(logo.data.logos));
	};
	return (
		<>
			<img
				className="logo"
				width="100px"
				src={logo.dark}
				alt="EPL logo"
			/>
		</>
	);
};

export default Logo;
