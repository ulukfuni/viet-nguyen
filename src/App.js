import React, { Component } from 'react';
import NamePlate from './nameplate';
import Particle from './particle';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NamePlate></NamePlate>
				<Particle></Particle>
			</div>
		);
	}
}

export default App;
	