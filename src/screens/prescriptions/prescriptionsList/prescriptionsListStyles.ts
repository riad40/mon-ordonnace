import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const prescriptionsListStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderBottomColor: "#ddd",
        borderBottomWidth: hp("0.2%"),
        paddingHorizontal: wp("5%"),
        borderTopColor: "#ddd",
        borderTopWidth: hp("0.2%"),
    },
    btnCenter: {
        alignSelf: "center",
        marginVertical: hp("2%"),
    },
})

export default prescriptionsListStyles
