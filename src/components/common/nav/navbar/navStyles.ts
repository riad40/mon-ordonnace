import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

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
        color: colors.coldBlue,
        fontFamily: "OpenSans-Bold",
    },
    lightTitle: {
        fontWeight: "300",
        fontSize: 20,
        color: colors.coldBlue,
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        width: 30,
        height: 30,
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        fontSize: 20,
        color: colors.coldBlue,
        fontFamily: "SourceSansPro-SemiBold",
        marginLeft: 5,
        marginBottom: 3,
    },
})

export default navStyles
