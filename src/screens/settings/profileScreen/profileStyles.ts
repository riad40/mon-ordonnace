import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_18 } from "../../../constants/fontSize"
import colors from "../../../constants/colors"

const profileStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        padding: wp("5%"),
    },
    image: {
        width: wp("30%"),
        height: hp("15%"),
        borderRadius: hp("50%"),
        marginBottom: hp("2%"),
        resizeMode: "contain",
    },
    name: {
        fontSize: FONT_SIZE_18,
        fontFamily: "SourceSansPro-Bold",
        textTransform: "uppercase",
        marginBottom: hp("1%"),
        color: "#000",
    },
    modal: {
        margin: 0,
        justifyContent: "flex-end",
    },
    modalContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: wp("5%"),
        borderTopRightRadius: wp("5%"),
        paddingHorizontal: wp("20%"),
        paddingTop: 0,
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    modalButton: {
        padding: wp("1.5%"),
        alignItems: "center",
        borderRadius: wp("5.7%"),
        borderColor: colors.coldBlue,
        borderWidth: 3,
    },
})

export default profileStyles
