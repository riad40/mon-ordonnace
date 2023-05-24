import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_18 } from "../../../constants/fontSize"

const profileStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        padding: wp("5%"),
    },
    image: {
        width: wp("30%"),
        height: hp("15%"),
        borderRadius: hp("50%"),
        marginBottom: hp("2%"),
        resizeMode: "contain",
    },
    name: {
        fontSize: FONT_SIZE_18,
        fontFamily: "SourceSansPro-Bold",
        textTransform: "uppercase",
        marginBottom: hp("1%"),
        color: "#000",
    },
})

export default profileStyles
