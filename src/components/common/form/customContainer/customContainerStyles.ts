import { StyleSheet } from "react-native"

const customContainerStyles = StyleSheet.create({
    container: {
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
    },
    labelContainer: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 4,
        paddingVertical: 7,
        zIndex: 100,
        position: "absolute",
        top: -20,
        left: 10,
    },
    label: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#746A6A",
        marginBottom: 10,
    },
})

export default customContainerStyles
