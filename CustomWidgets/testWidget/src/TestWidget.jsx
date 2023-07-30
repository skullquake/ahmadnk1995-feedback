import { createElement, useState } from "react";

import "./ui/TestWidget.css";

export function TestWidget({ Editable, myTextValue, onChangeText, requiredMessage }) {
	const [TextValue, setTextValue] = useState(myTextValue.value);

	// --------   OnChange Action  ---------- //
	const onTextChanged = () => {
		if (onChangeText) {
			const { canExecute, isExecuting, execute } = onChangeText;

			if (canExecute && !isExecuting) {
				execute();
			}
		}
	};

	// --------  Handle Change Text Event ---------- //
	function handleChange(event) {
		setTextValue(event.target.value);

		if(//a bit more validation
			myTextValue!=null&&
			myTextValue.status=="available"&&
			!myTextValue.readOnly
		){
			//first set
				myTextValue.setValue(event.target.value);
			//then execute event
				onTextChanged();
		}
	}
	if(
		myTextValue!=null&&
		myTextValue.status=="available"
	){
		return(
			<div>
				<input
					type="text"
					className="Myinput"
					disabled={myTextValue.readOnly?true:false}
					value={myTextValue?.value ?? ""}
					onChange={handleChange}
				/>
				{/* ------------ Validation -------------*/}
				{myTextValue.validation!=null&&myTextValue.validation!=""?<div className="alert alert-danger mx-validation-message">{myTextValue.validation}</div>:null}
			</div>
		);
	}else{
		return(null);
	}
}
