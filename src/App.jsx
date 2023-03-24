import "./App.css";
import Contacts from "./components/Contacts";
import CreateContact from "./components/CreateContact";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<Header />
			<Contacts />
			<CreateContact />
		</div>
	);
}

export default App;
