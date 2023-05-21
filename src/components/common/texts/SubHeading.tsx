import { Text, StyleSheet } from "react-native"

const SubHeading = ({ text }: { text: string }) => {
    return <Text style={styles.heading}>{text}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SourceSansPro-Regular",
        color: "#A2A2A2",
        fontSize: 16,
    },
})

export default SubHeading
