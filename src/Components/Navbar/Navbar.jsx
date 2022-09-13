/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import s from "./Navbar.module.css";
import logo from '../assets/logo.png'

class Navbar extends Component {
	render() {
		return (
			<div className={s.navbar}>
				<div className={`container ${s.navbarWrap}`}>
					<img className={s.logo} src={logo} alt="logo" />
					<ul className={s.navbarList}>
						<li><a href="#">services</a></li>
						<li><a href="#">about</a></li>
						<li><a href="#">contact</a></li>
						<li><a href="#">shop</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Navbar;