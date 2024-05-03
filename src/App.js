import Main from "./components/Main";

import FormContextProvider from "./FormContext/FormContext";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";

function App() {
	return (
		<FormContextProvider>
			<div className="App">
				<Navbar />
				<div className="main-bottom-container">
					<Main />
					<BottomBar />
				</div>
			</div>
		</FormContextProvider>
	);
}

export default App;
