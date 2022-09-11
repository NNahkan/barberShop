import React, { Component } from 'react';
import About from '../About/About';
import Greeting from '../Greeting/Greeting';

class Main extends Component {
	render() {
		return (
			<>
			<Greeting/>
			<About/>
			</>
		);
	}
}

export default Main;