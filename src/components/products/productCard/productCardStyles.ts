import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const productCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: wp("5%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderTopColor: "#E6E6E6",
        borderTopWidth: hp("0.2%"),
        borderBottomColor: "#E6E6E6",
        borderBottomWidth: hp("0.1%"),
    },
    image: {
        width: wp("13%"),
        height: hp("6.3%"),
        resizeMode: "contain",
        borderRadius: hp("1%"),
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    details: {
        marginLeft: wp("2.5%"),
        justifyContent: "space-between",
        height: hp("6%"),
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
        textTransform: "uppercase",
    },
    type: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#A2A2A2",
        textTransform: "uppercase",
    },
    therapeuticClass: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp("1.5%"),
    },
})

export default productCardStyles
