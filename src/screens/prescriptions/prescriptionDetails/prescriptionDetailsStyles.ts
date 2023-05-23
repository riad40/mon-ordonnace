import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const prescriptionDetailsStyles = StyleSheet.create({
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
    patientNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp("5%"),
        marginVertical: hp("1.5%"),
    },
    patientNameBold: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
    },
    patientName: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
    },
    productsWrapper: {
        paddingHorizontal: wp("5%"),
        marginVertical: hp("1%"),
    },
    productTitle: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        marginBottom: hp("1.5%"),
        textTransform: "uppercase",
    },
    productsDosagesWrapper: {
        paddingHorizontal: wp("5%"),
        marginBottom: hp("1%"),
    },
    productsDosagesDateRange: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
    },
    productsDosagesDosage: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
    },
})

export default prescriptionDetailsStyles
