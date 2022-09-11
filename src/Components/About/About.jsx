import React, { Component } from "react";
import s from './About.module.css'

class About extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#655043"}}>
        <div className={`container ${s.about}`}>
		  <h2>About Us</h2>
		  <h4>Some fancy words right over here</h4>
		  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo
        nobis? Soluta est voluptatem reprehenderit alias, architecto molestiae
        nesciunt dolorem! Reiciendis quia odio a accusamus deserunt quis,
        tempore illum provident.</p>
		  </div>
      </div>
    );
  }
}

export default About;
