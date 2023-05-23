import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const stateCardStyles = StyleSheet.create({
    text: {
        fontFamily: "SourceSansPro-Bold",
        color: "#FFFFFF",
        textAlign: "center",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: wp("5%"),
        height: hp("2.5%"),
        marginRight: wp("1.5%"),
        resizeMode: "contain",
    },
})

export default stateCardStyles
