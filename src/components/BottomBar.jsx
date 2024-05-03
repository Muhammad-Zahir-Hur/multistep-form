import React, { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";
import Verify from "./Verify";

function BottomBar() {
	let {
		step,
		dispatchStep,
		name,
		email,
		phone,
		setEmptyInputs,
		emptyInputs,
		planObj,
		addons,
	} = useContext(FormContext);

	return (
		<div className="bottom-bar">
			{step == 1 ? (
				<>
					<button
						className="next"
						onClick={() => {
							let tempObj = planObj;
							Verify(
								step,
								name,
								email,
								phone,
								setEmptyInputs,
								emptyInputs,
								tempObj,
								addons
							) && dispatchStep({ type: Number(step + 1) });
						}}>
						Next
					</button>
				</>
			) : (
				<>
					<button
						className="next"
						onClick={() => {
							let tempObj = planObj;
							step < 5 &&
								(Verify(
									step,
									name,
									email,
									phone,
									setEmptyInputs,
									emptyInputs,
									tempObj,
									addons
								)
									? dispatchStep({ type: Number(step + 1) })
									: alert("please choose something"));
						}}>
						Next
					</button>
					<button
						className="back"
						onClick={() => {
							step > 1 && dispatchStep({ type: Number(step - 1) });
						}}>
						Back
					</button>
				</>
			)}
		</div>
	);
}

export default BottomBar;
