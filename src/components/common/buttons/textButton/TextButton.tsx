import { Text, View, TouchableOpacity } from "react-native"
import textButtonStyles from "./textButtonStyles"

const TextButton = ({ text, onPress, style }: { text: string; onPress?: () => void; style?: object }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[textButtonStyles.button, style]}>
                <Text style={[textButtonStyles.buttonText, style]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextButton
