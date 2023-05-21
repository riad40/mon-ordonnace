import { StyleSheet } from "react-native"

const prescriptionCardStyles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    imageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 10,
    },
    textWrapper: {
        marginLeft: 10,
        justifyContent: "space-between",
        height: 45,
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
    },
    date: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#B9B9B9",
    },
    statuswrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 50,
        paddingBottom: 20,
    },
    prescriptionId: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#939393",
    },
    status: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        color: "#FFFFFF",
    },
})

export default prescriptionCardStyles
