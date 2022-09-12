import React, { Component } from "react";
import s from "./About.module.css";
import about from "../assets/aboutUs.jpg";

class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className={s.about}>
            <div>
              <img className={s.imgWrapper} src={about} alt="aboutUs" />
            </div>
            <div className={s.aboutContainer}>
              <h2>About Us</h2>
              <h4>Some fancy words right over here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quo nobis? Soluta est voluptatem reprehenderit alias, architecto
                molestiae nesciunt dolorem! Reiciendis quia odio a accusamus
                deserunt quis, tempore illum provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
