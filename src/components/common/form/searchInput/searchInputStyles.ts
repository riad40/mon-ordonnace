import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const searchInputStyles = StyleSheet.create({
    container: {
        marginTop: hp("2%"),
        paddingHorizontal: wp("4%"),
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: wp("0.3%"),
        borderColor: "#E6E6E6",
        borderRadius: hp("0.5%"),
        paddingHorizontal: wp("3%"),
        paddingVertical: hp("0.5%"),
        marginBottom: hp("1.2%"),
        placeholderTextColor: "#E6E6E6",
    },
    icon: {
        width: wp("5%"),
        height: hp("2.5%"),
        resizeMode: "contain",
    },
    input: {
        flex: 1,
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#939393",
    },
})

export default searchInputStyles
