import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const prescriptionCardStyles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: wp("5%"),
    },
    imageWrapper: {
        width: wp("12%"),
        height: hp("6%"),
        borderRadius: hp("1%"),
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: hp("1%"),
    },
    textWrapper: {
        marginLeft: wp("2.5%"),
        justifyContent: "space-between",
        height: hp("5%"),
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
    },
    date: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#B9B9B9",
    },
    statuswrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: wp("12%"),
        paddingBottom: hp("2%"),
    },
    prescriptionId: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#939393",
    },
    status: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        color: "#FFFFFF",
    },
})

export default prescriptionCardStyles
