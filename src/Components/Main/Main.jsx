import React, { Component } from 'react';
import About from '../About/About';
import Greeting from '../Greeting/Greeting';
import Info from '../Info/Info';

class Main extends Component {
	render() {
		return (
			<>
			<Greeting/>
			<About/>
			<Info/>
			</>
		);
	}
}

export default Main;