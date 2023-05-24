import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const settingsListStyles = StyleSheet.create({
    container: {
        marginVertical: hp("2%"),
        paddingHorizontal: wp("5%"),
        paddingVertical: hp("1%"),
    },
})

export default settingsListStyles
