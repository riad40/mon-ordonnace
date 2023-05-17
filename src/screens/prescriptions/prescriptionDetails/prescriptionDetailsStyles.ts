import { StyleSheet } from "react-native"

const prescriptionDetailsStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        marginVertical: 20,
        paddingVertical: 20,
    },
    patientNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 20,
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
        marginBottom: 10,
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
        marginBottom: 10,
    },
    productsDosagesDosage: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        marginBottom: 10,
    },
})

export default prescriptionDetailsStyles
