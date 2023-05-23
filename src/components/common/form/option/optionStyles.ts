import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const optionStyles = StyleSheet.create({
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp("1.5%"), // 10
        borderBottomColor: "#C6C6C6",
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
        paddingVertical: hp("1%"), // 10
    },
    optionsText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#000000",
    },
    optionsImage: {
        width: wp("8.5%"),
        height: hp("4.5%"),
        borderRadius: hp("4.5%"), // 10
        resizeMode: "contain",
        marginRight: wp("2.5%"), // 20
    },
})

export default optionStyles
