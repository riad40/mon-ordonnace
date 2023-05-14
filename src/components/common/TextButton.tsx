import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const TextButton = ({
    text,
    onPress,
    style,
    bg,
}: {
    text: string
    onPress?: () => void
    style?: object
    bg?: boolean
}) => {
    bg = bg || false
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[bg && styles.button, style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: "SourceSansPro-SemiBold",
        color: "#18B1D4",
        fontSize: 16,
    },
})

export default TextButton
