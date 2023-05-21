import { StyleSheet } from "react-native"

const productDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
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
})

export default productDetailsStyles
