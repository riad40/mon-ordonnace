import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const textButtonStyles = StyleSheet.create({
    button: {
        paddingVertical: hp("1.5%"),
        paddingHorizontal: wp("3%"),
        borderRadius: wp("0.5%"),
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: colors.coldBlue,
        fontSize: 16,
    },
})

export default textButtonStyles
