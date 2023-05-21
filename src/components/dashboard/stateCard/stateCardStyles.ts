import { StyleSheet } from "react-native"

const stateCardStyles = StyleSheet.create({
    text: {
        fontFamily: "SourceSansPro-Bold",
        color: "#FFFFFF",
        textAlign: "center",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: "contain",
    },
})

export default stateCardStyles
