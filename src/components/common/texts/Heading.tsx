import { Text, StyleSheet } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const Heading = ({ text }: { text: string }) => {
    return <Text style={styles.heading}>{text}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SourceSansPro-Bold",
        color: "#000000",
        fontSize: 24,
        marginBottom: hp("1.5%"),
    },
})

export default Heading
