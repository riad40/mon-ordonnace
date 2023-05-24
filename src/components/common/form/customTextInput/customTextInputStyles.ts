import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14 } from "../../../../constants/fontSize"

const customTextInputStyles = StyleSheet.create({
    input: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: FONT_SIZE_14,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: hp("1.5%"), // 10
        paddingHorizontal: wp("5%"), // 40
        paddingVertical: hp("1.5%"), // 10
        height: hp("9%"), // 75
    },
})

export default customTextInputStyles
