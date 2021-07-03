import "./sassStyles/_global.scss";
import Store from "./components/helpers/Store";

import { Hangman } from "./components/layout/hangman/Hangman";

function App() {
	return (
		<Store>
			<div className="App">
				<Hangman />
			</div>
		</Store>
	);
}

export default App;
