import React, { useContext } from "react";

import { FormContext } from "../FormContext/FormContext";
import { Info } from "./Info";
import { Cards } from "./Cards";
import { AddOn } from "./AddOn";
import DoubleCheck from "./DoubleCheck";
import Thankyou from "./Thankyou";

function Main() {
	let { mainpara, mainheading, step } = useContext(FormContext);

	return (
		<div className="main">
			<div className="base-main">
				<h1 className="main-heading">{mainheading}</h1>
				<p className="main-para">{mainpara}</p>
			</div>
			{step != 2 && step != 3 && step != 4 && step != 5 && <Info />}
			{step != 1 && step != 3 && step != 4 && step != 5 && <Cards />}
			{step != 1 && step != 2 && step != 4 && step != 5 && <AddOn />}
			{step != 1 && step != 2 && step != 3 && step != 5 && <DoubleCheck />}
			{step != 1 && step != 2 && step != 3 && step != 4 && <Thankyou />}
		</div>
	);
}

export default Main;
