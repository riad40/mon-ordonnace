import { StyleSheet } from "react-native"

const navStyles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    boldTitle: {
        fontSize: 20,
        color: "#18B1D4",
        fontFamily: "OpenSans-Bold",
    },
    lightTitle: {
        fontWeight: "300",
        fontSize: 20,
        color: "#18B1D4",
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        width: 30,
        height: 30,
    },
})

export default navStyles
