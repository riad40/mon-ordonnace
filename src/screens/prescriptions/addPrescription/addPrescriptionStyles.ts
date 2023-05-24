import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14 } from "../../../constants/fontSize"

const addPrescriptionStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        marginVertical: hp("2%"),
        paddingVertical: hp("2%"),
        width: "90%",
        alignSelf: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: hp("1%"),
    },
    leftTextButtonWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: wp("5%"),
        marginVertical: hp("1%"),
    },
    formWrapper: {
        paddingHorizontal: wp("5%"),
        marginVertical: hp("1%"),
    },
    button: {
        backgroundColor: colors.coldBlue,
        borderRadius: hp("3%"),
        paddingVertical: hp("1.5%"),
        alignItems: "center",
        marginBottom: hp("1%"),
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: FONT_SIZE_14,
        color: "#FFFFFF",
    },
})

export default addPrescriptionStyles
