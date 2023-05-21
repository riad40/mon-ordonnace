import { TextInput } from "react-native"
import customTextInputStyles from "./customTextInputStyles"

const CustomTextInput = ({
    placeholder,
    value,
    onChangeText,
    style,
}: {
    placeholder: string
    value?: string
    onChangeText?: (text: string) => void
    style?: object
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[customTextInputStyles.input, style]}
        />
    )
}

export default CustomTextInput
