const Logo = ({ logo }) => {
	return (
		<>
			<img
				className="logo"
				width="100px"
				src={logo.dark}
				alt="League logo"
			/>
		</>
	);
};

export default Logo;
