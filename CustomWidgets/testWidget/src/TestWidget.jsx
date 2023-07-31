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
        onTextChanged();
        myTextValue.setValue(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                className="Myinput"
                disabled={Editable == "RW" ? false : true}
                value={TextValue}
                onChange={handleChange}
            />
            {/* ------------ Validation -------------*/}
            {TextValue === "" ? <p className="Myalert">{requiredMessage}</p> : null}
        </div>
    );
}
