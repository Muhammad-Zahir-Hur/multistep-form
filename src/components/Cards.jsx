import React, { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";
import Arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useRef } from "react";
import { motion, MotionConfig } from "framer-motion";

function Card({ image, plan, rate }) {
	let { yearly, setPlanObj, planObj } = useContext(FormContext);
	let cardRef = useRef();

	// function handleClick(yearly, total, setTotal, rate, plan) {
	// 	setTotal(0);
	// 	if (true) {
	// 		setSelectedCard(true);
	// 		if (yearly) {
	// 			setPlanObj({ plan, rate: rate * 10 });
	// 			console.log(planObj);
	// 			setTotal(+total + rate * 10);
	// 			return;
	// 		}
	// 		return setTotal(+total + rate);
	// 	}

	// 	setSelectedCard(true);
	// 	if (yearly) {
	// 		setTotal(0);
	// 		setTotal(+total - rate * 10);
	// 		return;
	// 	}
	// 	setTotal(0);
	// 	setTotal(+total - rate);
	// 	return;
	// }
	function handleClick(yearly, rate, plan) {
		yearly
			? setPlanObj({ plan, rate: rate * 10 })
			: setPlanObj({ plan, rate: rate });
	}

	return (
		<div
			className={plan == planObj.plan ? "card selected-card" : "card"}
			onClick={() => handleClick(yearly, rate, plan)}
			ref={cardRef}>
			<img src={image} alt={plan} className="card-img" />
			<div>
				<p className="plan">{plan}</p>
				<p className="card-p">{yearly ? `$${rate * 10}/yr` : `$${rate}/mo`}</p>
				{yearly ? <p className="free-months">2 months free</p> : <></>}
			</div>
		</div>
	);
}

export function Cards() {
	let { yearly, setYearly, selectedPlan, setPlanObj } = useContext(FormContext);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
			<div className="cards-container">
				<Card image={Arcade} plan={"Arcade"} rate={9} />
				<Card image={advanced} plan={"Advanced"} rate={12} />
				<Card image={pro} plan={"Pro"} rate={15} />
			</div>
			{!selectedPlan ? (
				<div className="plan-type-toogle">
					<p>monthly</p>
					<div>
						<input
							type="checkbox"
							checked={yearly}
							id="switch"
							className="checkbox"
							onChange={() => {
								setYearly(!yearly);
								setPlanObj({});
							}}
						/>
						<label htmlFor="switch" className="toggle"></label>
					</div>
					<p>Yearly</p>
				</div>
			) : (
				<></>
			)}
		</motion.div>
	);
}
