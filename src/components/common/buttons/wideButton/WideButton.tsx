import { Text, TouchableOpacity } from "react-native"
import wideButtonStyles from "./wideButtonStyles"

const WideButton = ({
    text,
    onPress,
    ref,
    disabled,
}: {
    text: string
    onPress?: () => void
    ref?: React.RefObject<TouchableOpacity>
    disabled?: boolean
}): JSX.Element => {
    return (
        <TouchableOpacity style={wideButtonStyles.button} onPress={onPress} ref={ref} disabled={disabled}>
            <Text style={wideButtonStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default WideButton
