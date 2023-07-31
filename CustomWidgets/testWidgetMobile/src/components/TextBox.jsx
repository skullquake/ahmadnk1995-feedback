import { createElement, useState } from "react";
import { Text, View, TextInput } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    },
    input: {
        minWidth: 48,
        minHeight: 48,
        borderWidth: 1,
        borderColor: "#CED0D3",
        borderRadius: 8,
        padding: 10
    },
    validation: { color: "red" }
};

export function TextBox({ style, Editable, myTextValue, onChangeText, requiredMessage }) {
    const [TextValue, setTextValue] = useState(myTextValue.value);

    // --------   OnChange Action  ---------- //
    const onTextChanged = () => {
        if (onChangeText) {
            const { canExecute, isExecuting, execute } = onChangeText;
            if (onChangeText) {
                if (canExecute && !isExecuting) {
                    execute();
                }
            }
        }
    };

    // --------  Handle Change Text Event ---------- //
    function handleChange(text) {
        setTextValue(text);
        onTextChanged();
        myTextValue.setValue(text);
    }

    const styles = mergeNativeStyles(defaultStyle, style);
    return (
        <View style={styles.container}>
            <TextInput
                value={TextValue}
                style={styles.input}
                editable={Editable == "RW" ? true : false}
                onChangeText={text => handleChange(text)}
            ></TextInput>

            {TextValue === "" ? <Text style={styles.validation}>{requiredMessage}</Text> : null}
        </View>
    );
}
