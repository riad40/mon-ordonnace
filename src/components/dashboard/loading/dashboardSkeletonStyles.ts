import { StyleSheet } from "react-native"

const dashboardSkeletonStyles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    stateCard: {
        marginVertical: 10,
        fontSize: 24,
        lineHeight: 18,
        fontFamily: "SourceSansPro-Regular",
        textAlign: "center",
        borderRadius: 10,
        paddingVertical: 50,
        width: "100%",
    },
})

export default dashboardSkeletonStyles
