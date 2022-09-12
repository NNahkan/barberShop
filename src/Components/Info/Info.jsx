import React, { Component } from "react";
import s from "./Info.module.css";

class Info extends Component {
  render() {
    return (
      <div className={s.infoSection}>
        <div className={`container ${s.info}`}>
          <div>
            <h3>Hours</h3>
				<p>Monday-Friday :  8am to 5pm</p>
				<p>Saturday-Sunday : Closed</p>
          </div>
          <div>
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12890.65995515432!2d-83.4919199!3d36.1260187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1fc4e3df9f8d7b9!2sBarbershop%202020!5e0!3m2!1str!2sus!4v1662950987646!5m2!1str!2sus"
              width="480"
              height="320"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
