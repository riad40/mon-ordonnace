import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const patientDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: wp("5%"),
    },
    image: {
        width: wp("35%"),
        height: hp("18%"),
        borderRadius: hp("10%"),
        marginBottom: hp("2%"),
        resizeMode: "contain",
    },
    name: {
        fontSize: 20,
        fontFamily: "SourceSansPro-Bold",
        textTransform: "uppercase",
        marginBottom: hp("1%"),
        color: "#000",
    },
    type: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        textTransform: "uppercase",
        color: "#B9B9B9",
    },
    bottom: {
        marginVertical: hp("2%"),
    },
})

export default patientDetailsStyles
