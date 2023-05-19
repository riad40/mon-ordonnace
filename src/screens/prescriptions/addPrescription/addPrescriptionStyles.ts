import { StyleSheet } from "react-native"

const addPrescriptionStyles = StyleSheet.create({
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
    leftTextButtonWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 22,
        marginVertical: 20,
    },
    formWrapper: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#18B1D4",
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#FFFFFF",
    },
})

export default addPrescriptionStyles
