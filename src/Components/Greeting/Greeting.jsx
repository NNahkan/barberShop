import React, { Component } from "react";
import s from '../Greeting/Greeting.module.css'
import Navbar from "../Navbar";

class Greeting extends Component {
  render() {
    return (
	 <div  className={s.greeting} >
					<Navbar/>

	 </div>
	 )
  }
}

export default Greeting;
