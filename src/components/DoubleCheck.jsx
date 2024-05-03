import React from "react";
import { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";

function DoubleCheck() {
	let { planObj, yearly, total, addons, dispatchStep } =
		useContext(FormContext);
	console.log(addons);
	let AddonsForCheck = addons.map((value) => {
		let x;
		for (x in value) {
			return (
				<div className="addons-check">
					<p>{x}</p> <p className="addon-check-price">+{value[x]}$</p>
				</div>
			);
		}
	});

	return (
		<div className="double-check">
			<div className="details">
				<div className="plan-hr-cover">
					<div className="plan-change-container">
						<div className="plan">
							<p className="check-plan">
								{planObj.plan}
								{yearly ? `(yearly)` : `(monthly)`}
							</p>
							<p className="check-price">
								${planObj.rate}
								{yearly ? "year" : "month"}
							</p>
						</div>
						<p
							className="check-change"
							onClick={() => {
								dispatchStep({ type: 2 });
							}}>
							change
						</p>
					</div>
					<hr />
					{AddonsForCheck}
				</div>
				{/* <p>{value.plan}</p> <p>{value.rate}</p> */}
			</div>
			<div className="total-price">
				<p className="check-total-text">
					Total rate per {yearly ? "year" : "month"}:
				</p>
				<p className="check-total-value">
					${total}/{yearly ? `year` : `month`}
				</p>
			</div>
		</div>
	);
}

export default DoubleCheck;
