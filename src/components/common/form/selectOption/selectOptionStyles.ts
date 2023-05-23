import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const selectOptionStyles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp("5%"),
        paddingVertical: hp("1.5%"),
        height: hp("8.5%"),
    },
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        padding: wp("5%"),
        paddingTop: 0,
        height: "50%",
    },
    closeModal: {
        alignSelf: "center",
        padding: wp("2%"),
    },
})

export default selectOptionStyles
