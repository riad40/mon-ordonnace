import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
import { FONT_SIZE_14, FONT_SIZE_18 } from "../../../../constants/fontSize"

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
        fontSize: FONT_SIZE_18,
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
        fontSize: FONT_SIZE_14,
        fontFamily: "SourceSansPro-SemiBold",
        color: "#676767",
    },
    detailsDarkText: {
        fontSize: FONT_SIZE_14,
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
        fontSize: FONT_SIZE_14,
        fontFamily: "SourceSansPro-Bold",
        color: colors.coldBlue,
    },
})

export default detailsCardStyles
