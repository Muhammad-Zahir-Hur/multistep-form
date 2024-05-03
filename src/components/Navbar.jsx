import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext/FormContext";

function Element({ value, step, text }) {
	return (
		<div className="nav-div">
			<div>
				{value == step ? (
					<div id="selected" className="element">
						<span>{value}</span>
					</div>
				) : (
					<div className="element">
						<span>{value}</span>
					</div>
				)}
			</div>
			<div className="larger-screens">
				<p className="ls-step">step: {value}</p>
				<p className="ls-text">{text}</p>
			</div>
		</div>
	);
}

function Navbar() {
	let stepsArr = [1, 2, 3, 4];
	let textArr = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
	let { step } = useContext(FormContext);
	return (
		<nav className="nav-bar">
			{stepsArr.map((value, index) => {
				return (
					<Element
						value={value}
						step={step}
						text={textArr[index]}
						key={index}
					/>
				);
			})}
		</nav>
	);
}

export default Navbar;
