import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

const detailsCardStyles = StyleSheet.create({
    detailsContainer: {
        width: "100%",
        marginTop: 20,
        borderTopColor: "#B9B9B9",
        borderTopWidth: 1,
        backgroundColor: "#fff",
        padding: 20,
        paddingBottom: 0,
    },
    detailsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsHeading: {
        fontSize: 20,
        fontFamily: "SourceSansPro-Bold",
        color: "#000",
        paddingBottom: 10,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: 20,
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1,
    },
    detailsText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        color: "#676767",
    },
    detailsDarkText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        color: "#000",
        width: "50%",
        textAlign: "right",
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    editText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-Bold",
        color: colors.coldBlue,
    },
})

export default detailsCardStyles
