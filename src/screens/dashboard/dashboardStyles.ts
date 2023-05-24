import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const dashboardStyles = StyleSheet.create({
    container: {
        padding: wp("5%"),
        marginBottom: hp("10%"),
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headingContainer: {
        marginVertical: hp("1%"),
    },
})

export default dashboardStyles
