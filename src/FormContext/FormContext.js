import React, { createContext, useReducer, useState } from "react";
const FormContext = createContext();

function FormContextProvider({ children }) {
	let [planObj, setPlanObj] = useState({});
	let [addons, setAddons] = useState([]);
	let [total, setTotal] = useState(0);
	let [yearly, setYearly] = useState(false);
	let [mainheading, setMainheading] = useState("Personal Info");
	let [mainpara, setMainpara] = useState(
		"Please provide your name email adress and phone"
	);
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState("");
	let [emptyInputs, setEmptyInputs] = useState([]);

	function stepReducer(state, action) {
		console.log(action.type + " is the value of action.type");
		switch (action.type) {
			case 1:
				setMainheading("Personal Info");
				setMainpara("Please provide your name email adress and phone");
				return 1;

			case 2:
				console.log("case 2 for the reducer");

				setMainheading("Select Your Plan");
				setMainpara("You have the option of Monthly or Yearly Billing");
				return 2;

			case 3:
				setMainheading("Pick add-ons");
				setMainpara("Add-ons help you enhance your experience");
				return 3;

			case 4:
				setMainheading("Finishing Up");
				setMainpara("Double check everything looks OK before confirming");
				return 4;

			case 5:
				setMainheading("");
				setMainpara("");
				return 5;

			default:
				console.log("case default for the reducer");
				return state;
		}
	}

	let [step, dispatchStep] = useReducer(stepReducer, 1);

	return (
		<FormContext.Provider
			value={{
				name,
				setName,
				email,
				setEmail,
				phone,
				setPhone,
				mainpara,
				setMainpara,
				mainheading,
				setMainheading,
				planObj,
				setPlanObj,
				step,
				dispatchStep,
				addons,
				setAddons,
				total,
				setTotal,
				yearly,
				setYearly,
				emptyInputs,
				setEmptyInputs,
			}}>
			{children}
		</FormContext.Provider>
	);
}

export default FormContextProvider;
export { FormContext };
