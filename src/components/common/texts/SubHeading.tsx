import { Text, StyleSheet } from "react-native"
import { FONT_SIZE_14 } from "../../../constants/fontSize"

const SubHeading = ({ text }: { text: string }) => {
    return <Text style={styles.heading}>{text}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SourceSansPro-Regular",
        color: "#A2A2A2",
        fontSize: FONT_SIZE_14,
    },
})

export default SubHeading
