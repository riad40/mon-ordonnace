import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14 } from "../../../constants/fontSize"

const patientCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: hp("1.5%"),
        paddingTop: hp("1.5%"),
    },
    imageWrapper: {
        width: wp("12%"),
        height: hp("6%"),
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: hp("8%"),
        resizeMode: "contain",
    },
    textWrapper: {
        marginLeft: wp("2.5%"),
        justifyContent: "space-between",
        height: hp("5%"),
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: FONT_SIZE_14,
        color: "#000000",
    },
    age: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: FONT_SIZE_14,
        color: "#B9B9B9",
    },
})

export default patientCardStyles
