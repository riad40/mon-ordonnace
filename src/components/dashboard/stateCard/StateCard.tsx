import { View, Text, Image, StyleSheet } from "react-native"
import stateCardStyles from "./stateCardStyles"

const StateCard = ({ state, value, image, color }: { state: string; value: string; image?: any; color: string }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            borderRadius: 10,
            padding: 20,
            width: image ? "100%" : "45%",
            marginBottom: 20,
            // height: image ? 110 : "100%",
        },
    })

    return (
        <View style={styles.container}>
            <Text style={[stateCardStyles.text, { fontSize: 24 }]}>{value}</Text>
            <View style={stateCardStyles.wrapper}>
                {image && <Image source={image} style={stateCardStyles.image} />}
                <Text style={[stateCardStyles.text, { fontSize: 20 }]}>{state}</Text>
            </View>
        </View>
    )
}

export default StateCard
