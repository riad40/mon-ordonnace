import { Text, TouchableOpacity } from "react-native"
import wideButtonStyles from "./wideButtonStyles"

const WideButton = ({ text, onPress, ref }: { text: string; onPress?: () => void; ref?: React.RefObject<TouchableOpacity> }): JSX.Element => {
    return (
        <TouchableOpacity style={wideButtonStyles.button} onPress={onPress} ref={ref}>
            <Text style={wideButtonStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default WideButton
