import { Text, View } from "react-native"
import customContainerStyles from "./customContainerStyles"

const CustomContainer = ({ label, element }: { label: string; element: JSX.Element }) => {
    return (
        <View style={customContainerStyles.container}>
            <View style={customContainerStyles.labelContainer}>
                <Text style={customContainerStyles.label}>{label}</Text>
            </View>
            {element}
        </View>
    )
}

export default CustomContainer
