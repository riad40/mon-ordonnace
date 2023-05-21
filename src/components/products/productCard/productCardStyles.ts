import { StyleSheet } from "react-native"

const productCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderTopColor: "#E6E6E6",
        borderTopWidth: 1,
        borderBottomColor: "#E6E6E6",
        borderBottomWidth: 2,
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        borderRadius: 5,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    details: {
        marginLeft: 10,
        justifyContent: "space-between",
        height: 50,
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
        textTransform: "uppercase",
    },
    type: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#A2A2A2",
        textTransform: "uppercase",
    },
    therapeuticClass: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
})

export default productCardStyles
