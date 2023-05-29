import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14, FONT_SIZE_18 } from "../../../constants/fontSize"

const productDetailsStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        padding: wp("5%"),
    },
    image: {
        width: wp("26%"),
        height: hp("13%"),
        borderRadius: hp("1%"),
        marginBottom: hp("2.5%"),
        resizeMode: "contain",
    },
    name: {
        fontSize: FONT_SIZE_18,
        fontFamily: "SourceSansPro-Bold",
        textTransform: "uppercase",
        marginBottom: hp("1.5%"),
        color: "#000",
    },
    type: {
        fontSize: FONT_SIZE_14,
        fontFamily: "SourceSansPro-SemiBold",
        textTransform: "uppercase",
        color: "#B9B9B9",
    },
})

export default productDetailsStyles
