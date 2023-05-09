import { View, Text, Image, StyleSheet } from "react-native"

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
        text: {
            fontFamily: "SourceSansPro-Bold",
            color: "#FFFFFF",
            // fontSize: 20,
            textAlign: "center",
        },
        wrapper: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        image: {
            width: 20,
            height: 20,
            marginRight: 10,
            resizeMode: "contain",
        },
    })

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 24 }]}>{value}</Text>
            <View style={styles.wrapper}>
                {image && <Image source={image} style={styles.image} />}
                <Text style={[styles.text, { fontSize: 20 }]}>{state}</Text>
            </View>
        </View>
    )
}

export default StateCard
