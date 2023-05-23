import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const editProfileStyles = StyleSheet.create({
    container: {
        padding: wp("5%"),
        backgroundColor: "#fff",
        height: "100%",
    },
    formContainer: {
        marginTop: hp("2%"),
    },
})

export default editProfileStyles
