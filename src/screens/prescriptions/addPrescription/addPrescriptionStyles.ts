import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_14, FONT_SIZE_16 } from "../../../constants/fontSize"

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
        width: "50%",
        alignSelf: "center",
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: FONT_SIZE_14,
        color: "#FFFFFF",
    },
    newProductWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: wp("5%"),
        marginVertical: hp("3%"),
    },
    newProductText: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: FONT_SIZE_16,
        color: "#000000",
    },
})

export default addPrescriptionStyles
