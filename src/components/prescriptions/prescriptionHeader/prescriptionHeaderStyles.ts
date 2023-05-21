import { StyleSheet } from "react-native"
import colors from "../../../constants/colors"

const prescriptionHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    titleWrapper: {
        width: "40%",
        backgroundColor: colors.coldBlue,
        paddingVertical: 10,
    },
    title: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#FFFFFF",
        textTransform: "uppercase",
        paddingLeft: 10,
    },
    dateWrapper: {
        width: "60%",
        backgroundColor: "#E8F8FA",
        paddingVertical: 10,
    },
    date: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#516783",
        paddingRight: 10,
        textAlign: "right",
    },
})

export default prescriptionHeaderStyles
