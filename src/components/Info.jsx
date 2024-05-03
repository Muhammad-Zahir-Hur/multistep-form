import React, { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";
import { motion, MotionConfig } from "framer-motion";

function Item({ type, label, value, setValue, placeholder, emptyInputs }) {
	return (
		<div className="info">
			<p htmlFor="input" className="info-label">
				{label}
			</p>
			<input
				onChange={(e) => {
					setValue(e.target.value);
					console.log(value);
				}}
				value={value}
				id="input"
				type={type}
				placeholder={placeholder}
				className="info-input"
			/>
			{emptyInputs.length != 0 &&
				console.log(`${emptyInputs.indexOf(label) == -1} for ${label}`)}
			{emptyInputs.length != 0 && emptyInputs.indexOf(label) == -1 ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}>
					<p className="empty-p">{label} is required</p>
				</motion.div>
			) : (
				<p></p>
			)}
		</div>
	);
}

export function Info({}) {
	let { name, email, phone, emptyInputs, setEmail, setName, setPhone } =
		useContext(FormContext);
	let types = ["text", "email", "phone"];
	let labels = ["Name", "email", "Phone"];
	let values = [name, email, phone];
	let setValues = [setName, setEmail, setPhone];
	let placeholders = ["Your Name", "your email", "your phone"];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
			<form>
				<Item
					type={types[0]}
					label={labels[0]}
					value={values[0]}
					setValue={setValues[0]}
					placeholder={[placeholders[0]]}
					emptyInputs={emptyInputs}
				/>

				<Item
					type={types[1]}
					label={labels[1]}
					value={values[1]}
					setValue={setValues[1]}
					placeholder={[placeholders[1]]}
					emptyInputs={emptyInputs}
				/>

				<Item
					type={types[2]}
					label={labels[2]}
					value={values[2]}
					setValue={setValues[2]}
					placeholder={[placeholders[2]]}
					emptyInputs={emptyInputs}
				/>
			</form>
		</motion.div>
	);
}
