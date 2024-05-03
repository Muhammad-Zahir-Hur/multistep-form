// let a = Verify(2, "asdf", "ghkl", "+92345", function () {}, [], {}, []);
// console.log(a);
function Verify(
	step,
	name,
	email,
	phone,
	setEmptyInputs,
	emptyInputs,
	tempObj,
	addons
) {
	console.log(
		step,
		name,
		email,
		phone,
		setEmptyInputs,
		emptyInputs,
		tempObj,
		addons
	);
	// verify if the step has to be increased or not by looking for the availability of necessary inputs
	if (step == 1) {
		console.log("inside step 1");
		if (name == "" || email == "" || phone == "") {
			console.log("indide name, email, phone verification");
			name == "" && setEmptyInputs([...emptyInputs, "name"]);
			email == "" && setEmptyInputs([...emptyInputs, "email"]);
			phone == "" && setEmptyInputs([...emptyInputs, "phone"]);
			console.log(name, phone, email);
			return false;
		}
		return true;
	}

	if (step == 2 && tempObj?.plan) {
		console.log("logging from step 2");
		return true;
	}
	if (step == 3 && addons != []) {
		console.log("logging from step 3");

		console.log(addons);
		return true;
	}
	console.log("logging from The main block");
	if (step == 4) {
		return true;
	}
	return false;
}

export default Verify;
