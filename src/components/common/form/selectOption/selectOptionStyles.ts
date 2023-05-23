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
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingTop: 0,
        maxHeight: "90%",
    },
    closeModal: {
        alignSelf: "center",
        padding: 10,
    },
})

export default selectOptionStyles
