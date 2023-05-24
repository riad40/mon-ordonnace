import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14 } from "../../../constants/fontSize"

const prescriptionHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: hp("1.5%"),
    },
    titleWrapper: {
        width: "40%",
        backgroundColor: colors.coldBlue,
        paddingVertical: hp("1.2%"),
    },
    title: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: FONT_SIZE_14,
        color: "#FFFFFF",
        textTransform: "uppercase",
        paddingLeft: wp("3%"),
    },
    dateWrapper: {
        width: "60%",
        backgroundColor: "#E8F8FA",
        paddingVertical: hp("1.2%"),
    },
    date: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: FONT_SIZE_14,
        color: "#516783",
        paddingRight: wp("3%"),
        textAlign: "right",
    },
})

export default prescriptionHeaderStyles
