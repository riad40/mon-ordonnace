import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14 } from "../../../../constants/fontSize"

const textButtonStyles = StyleSheet.create({
    button: {
        paddingVertical: hp("1.5%"),
        paddingHorizontal: wp("3%"),
        borderRadius: wp("0.5%"),
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: colors.coldBlue,
        fontSize: FONT_SIZE_14,
    },
})

export default textButtonStyles
