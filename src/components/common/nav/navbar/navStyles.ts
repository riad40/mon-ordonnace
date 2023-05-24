import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const navStyles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: wp("5%"),
        paddingVertical: hp("1.5%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    boldTitle: {
        fontSize: wp("5%"),
        color: colors.coldBlue,
        fontFamily: "OpenSans-Bold",
    },
    lightTitle: {
        fontWeight: "300",
        fontSize: wp("5%"),
        color: colors.coldBlue,
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        width: wp("5%"),
        height: hp("2.5%"),
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        fontSize: wp("5%"),
        color: colors.coldBlue,
        fontFamily: "SourceSansPro-SemiBold",
        marginLeft: wp("0.7%"),
        marginBottom: hp("0.4%"),
    },
})

export default navStyles
