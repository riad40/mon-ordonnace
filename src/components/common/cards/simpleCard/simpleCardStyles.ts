import { StyleSheet } from "react-native"

const simpleCardStyles = StyleSheet.create({
    simpleCard: {
        width: "100%",
        padding: 30,
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    simpleCardHeading: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000",
    },
})

export default simpleCardStyles
