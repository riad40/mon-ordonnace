import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_18 } from "../../../../constants/fontSize"

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
        fontSize: FONT_SIZE_18,
        color: "#FFFFFF",
        textAlign: "center",
    },
})

export default wideButtonStyles
