import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

const wideButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.coldBlue,
        paddingVertical: 20,
        width: "90%",
        alignSelf: "center",
        marginVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "center",
    },
})

export default wideButtonStyles
