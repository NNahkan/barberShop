import React, { Component } from 'react';
import About from '../About/About';
import Greeting from '../Greeting/Greeting';
import Info from '../Info/Info';
import Review from '../Review/Review';

class Main extends Component {
	render() {
		return (
			<>
			<Greeting/>
			<About/>
			<Info/>
			<Review/>
			</>
		);
	}
}

export default Main;