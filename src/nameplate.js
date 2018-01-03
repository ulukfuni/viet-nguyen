import React, { Component } from 'react';
import logo from './logo.svg';
import Links from './links';
import './App.css';

class NamePlate extends Component {
	render() {
		return (
			<div className="name-plate">
				{/* 
				<img src={logo} className="App-logo" alt="logo" /> 
				*/}
				<h1 className="App-title">Viet Nguyen</h1>
				<p>Web Dev in Orlando, FL</p>
				<Links></Links>
			</div>
		);
	}
}

export default NamePlate;
	