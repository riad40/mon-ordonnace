import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const wideButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.coldBlue,
        paddingVertical: hp("2.5%"),
        width: "90%",
        alignSelf: "center",
        marginVertical: hp("1.5%"),
        borderRadius: hp("1.5%"),
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "center",
    },
})

export default wideButtonStyles
