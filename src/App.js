import "./App.css";
import Container from "./containers/Container";
import useGoogleCharts from "./UseGoogleCharts";

function App() {
	const google = useGoogleCharts();
	return <Container google={google} />;
}

export default App;
