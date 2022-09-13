import React, { Component } from "react";
import s from "./Info.module.css";

class Info extends Component {
  componentDidMount() {
    this.input.addEventListener("keypress", this.onKeyPress, {
      passive: false,
    });
  }

  componentWillUnmount() {
    this.input.removeEventListener("keypress", this.onKeyPress);
  }

  onKeyPress(e) {
    console.log("KeyPressed");
  }

  render() {
    return (
      <div className={s.infoSection}>
        <div className={`container ${s.info}`}>
          <div className={s.infoLeft}>
            <h1>Not every haircut is the same.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cum itaque maxime dicta facere ad architecto eum ipsam! Corporis,
              quos!
            </p>
            <div className={s.infoLeftWrapper}>
              <i className="material-symbols-sharp">location_on</i>
              <div>
                <p>100 E Old Andrew Johnson Hwy</p>
                <p>Jefferson City</p>
                <p>TN 37760</p>
              </div>
            </div>
            <div className={s.infoLeftWrapper}>
              <i className="material-symbols-sharp">phone_enabled</i>
              <a href="tel:8653500003">(865) 350-0003</a>
            </div>
            <div className={s.infoLeftWrapper}>
              <i className="material-symbols-sharp">calendar_month</i>
              <div>
                <p>Tuesday-Saturday : 09:00 - 05:00 </p>
                <p>Saturday-Sunday : Closed</p>
              </div>
            </div>
          </div>
          <div>
            <iframe
              ref={(ref) => (this.input = ref)}
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12890.65995515432!2d-83.4919199!3d36.1260187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1fc4e3df9f8d7b9!2sBarbershop%202020!5e0!3m2!1str!2sus!4v1662950987646!5m2!1str!2sus"
              width="100%"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              passive="false"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
