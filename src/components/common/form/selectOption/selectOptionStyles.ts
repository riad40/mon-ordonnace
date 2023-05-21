import { StyleSheet } from "react-native"

const selectOptionStyles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 75,
        zIndex: 1,
    },
    options: {
        backgroundColor: "#FFFFFF",
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 10,
        height: 150,
    },
})

export default selectOptionStyles
