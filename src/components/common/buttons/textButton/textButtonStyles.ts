import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

const textButtonStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: colors.coldBlue,
        fontSize: 16,
    },
})

export default textButtonStyles
