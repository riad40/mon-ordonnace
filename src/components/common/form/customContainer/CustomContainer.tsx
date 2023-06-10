import { Text, View } from "react-native"
import customContainerStyles from "./customContainerStyles"

const CustomContainer = ({ label, element, validText }: { label: string; element: JSX.Element; validText?: string }) => {
    return (
        <View
            style={[
                customContainerStyles.container,
                {
                    borderColor: validText ? "#FF0000" : "#C6C6C6",
                },
            ]}>
            <View style={customContainerStyles.labelContainer}>
                <Text style={customContainerStyles.label}>{label}</Text>
            </View>
            {element}
            {validText ? (
                <View style={customContainerStyles.errorContainer}>
                    <Text style={customContainerStyles.errorText}>{validText}</Text>
                </View>
            ) : null}
        </View>
    )
}

export default CustomContainer
