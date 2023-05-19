import { Text, TextInput, StyleSheet } from "react-native"

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
        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={[styles.input, style]} />
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 75,
    },
})

export default CustomTextInput
