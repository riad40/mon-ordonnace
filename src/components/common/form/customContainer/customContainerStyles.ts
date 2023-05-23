import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const customContainerStyles = StyleSheet.create({
    container: {
        borderColor: "#C6C6C6",
        borderWidth: wp("0.3%"),
        borderRadius: hp("1.5%"),
        marginBottom: hp("3.5%"),
    },
    labelContainer: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: wp("0.5%"),
        paddingVertical: hp("0.5%"),
        position: "absolute",
        top: -hp("2.5%"),
        left: wp("2.5%"),
    },
    label: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#746A6A",
        marginBottom: hp("1%"),
    },
})

export default customContainerStyles
