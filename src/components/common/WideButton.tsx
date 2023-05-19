import { View, Text, Pressable, StyleSheet } from "react-native"

const WideButton = ({ text, onPress }: { text: string; onPress?: () => void }): JSX.Element => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#18B1D4",
        paddingVertical: 20,
        width: "90%",
        alignSelf: "center",
        marginVertical: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "center",
    },
})

export default WideButton
