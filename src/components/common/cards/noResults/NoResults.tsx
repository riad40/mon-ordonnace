import { View, Text, StyleSheet } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { FONT_SIZE_18 } from "../../../../constants/fontSize"

const NoResults = ({ text }: { text: string }): JSX.Element => {
    return (
        <>
            <View style={styles.container}>
                <Ionicons name="sad-outline" size={50} color="gray" />
                <Text style={styles.text}>Oops!</Text>
                <Text style={styles.text}>Aucun résultat pour "{text}"</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    text: {
        marginTop: 10,
        fontSize: FONT_SIZE_18,
        color: "gray",
        textAlign: "center",
    },
})

export default NoResults
