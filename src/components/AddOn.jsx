import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FormContext } from "../FormContext/FormContext";
import { motion, MotionConfig } from "framer-motion";

function AddOnComp({ addon, addonDisc, price, id }) {
	let { addons, setAddons, setTotal, planObj } = useContext(FormContext);
	let [checked, setChecked] = useState(addons[id]?.[addon] ? true : false);
	const updateAddons = (checked) => {
		let temp = [...addons];
		if (checked) {
			temp[id] = { [addon]: price };
		} else {
			temp = temp.splice(id, 1);
		}
		setAddons(temp);
	};

	const updateTotal = () => {
		let addonsTotalRate = 0;

		for (const x of addons) {
			for (const a in x) {
				addonsTotalRate = addonsTotalRate + x[a];
			}
		}

		setTotal(() => +planObj.rate + addonsTotalRate);
	};

	useEffect(() => {
		updateTotal();
	}, [addons]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
			<div className="addon">
				<input
					type="checkbox"
					name="check"
					id={addon}
					checked={checked}
					className="addon-input"
					onChange={() => {
						setChecked(!checked);
						updateAddons(!checked);
					}}
				/>
				<div className="addon-disc-div">
					<label htmlFor={addon} className="addon-name">
						{addon}
					</label>
					<p className="addon-disc">{addonDisc}</p>
				</div>
				<div className="price">{price}$/mo</div>
			</div>
		</motion.div>
	);
}

export function AddOn() {
	return (
		<div className="addon-container">
			<AddOnComp
				addon={"Customizable profile"}
				addonDisc={"Your Personal theme in your profile"}
				price={1}
				id={0}
			/>
			<AddOnComp
				addon={"Larger storage"}
				addonDisc={"Extra 1TB cloud server"}
				price={3}
				id={1}
			/>
			<AddOnComp
				addon={"Online Service"}
				addonDisc={"Access to multiplayer games"}
				price={2}
				id={2}
			/>
		</div>
	);
}
