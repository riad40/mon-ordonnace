import { StyleSheet } from "react-native"

const optionStyles = StyleSheet.create({
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        zIndex: 1,
        borderBottomColor: "#C6C6C6",
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
        paddingVertical: 10,
    },
    optionsText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        color: "#000000",
    },
    optionsImage: {
        width: 25,
        height: 25,
        borderRadius: 25,
        resizeMode: "contain",
        marginRight: 10,
    },
})

export default optionStyles
