import { Text, View, StyleSheet, ActivityIndicator } from "react-native"

const Loading = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default Loading
