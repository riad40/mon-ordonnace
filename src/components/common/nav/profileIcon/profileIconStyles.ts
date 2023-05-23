import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const profileIconStyles = StyleSheet.create({
    container: {
        width: wp("10%"),
        height: hp("5%"),
        borderRadius: hp("2.5%"),
        backgroundColor: "#FF5A5F",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default profileIconStyles
