import { Text, StyleSheet } from "react-native"

const Heading = ({ text }: { text: string }) => {
    return <Text style={styles.heading}>{text}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "SourceSansPro-Bold",
        color: "#000000",
        fontSize: 24,
        marginBottom: 5,
    },
})

export default Heading
