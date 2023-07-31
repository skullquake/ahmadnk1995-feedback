import { createElement } from "react";

import { TextBox } from "./components/TextBox";

export function TestWidgetMobile({ style, Editable, myTextValue, onChangeText, requiredMessage }) {
    return (
        <TextBox
            style={style}
            myTextValue={myTextValue}
            Editable={Editable}
            onChangeText={onChangeText}
            requiredMessage={requiredMessage}
        />
    );
}
