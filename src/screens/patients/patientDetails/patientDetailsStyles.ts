import { StyleSheet } from "react-native"

const patientDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        // borderRadius: 10,
        marginBottom: 20,
        resizeMode: "contain",
    },
    name: {
        fontSize: 20,
        fontFamily: "SourceSansPro-Bold",
        textTransform: "uppercase",
        marginBottom: 10,
        color: "#000",
    },
    type: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        textTransform: "uppercase",
        color: "#B9B9B9",
    },
    prescriptionsCard: {
        width: "100%",
        padding: 30,
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    prescriptionsCardHeading: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000",
    },
})

export default patientDetailsStyles
