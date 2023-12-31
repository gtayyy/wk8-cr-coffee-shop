
import React from 'react';
import Header from './Header';
import Bio from './Bio';
import InventoryControl from './InventoryControl';
import "./../CSS/App.css";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Bio />
			<InventoryControl />
		</React.Fragment>
	);
}

export default App;
