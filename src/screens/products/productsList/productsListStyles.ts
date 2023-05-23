import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const productsListStyles = StyleSheet.create({
    container: {
        padding: wp("5%"),
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnCenter: {
        alignSelf: "center",
        marginVertical: hp("2%"),
    },
})

export default productsListStyles
