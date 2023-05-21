import { StyleSheet } from "react-native"

const prescriptionDetailsStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        marginVertical: 20,
        paddingVertical: 20,
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
        borderRadius: 5,
    },
    patientNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
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
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    productTitle: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        marginBottom: 10,
        textTransform: "uppercase",
    },
    productsDosagesWrapper: {
        paddingHorizontal: 20,
        marginBottom: 10,
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
