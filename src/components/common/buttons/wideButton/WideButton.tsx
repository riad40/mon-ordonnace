import { Text, Pressable } from "react-native"
import wideButtonStyles from "./wideButtonStyles"

const WideButton = ({ text, onPress }: { text: string; onPress?: () => void }): JSX.Element => {
    return (
        <Pressable style={wideButtonStyles.button} onPress={onPress}>
            <Text style={wideButtonStyles.buttonText}>{text}</Text>
        </Pressable>
    )
}

export default WideButton
