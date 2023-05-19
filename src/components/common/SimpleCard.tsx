import { View, Text, Image, StyleSheet, Pressable } from "react-native"

const SimpleCard = ({ text, onPress }: { text: string; onPress?: () => void }): JSX.Element => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.prescriptionsCard}>
                <Text style={styles.prescriptionsCardHeading}>{text}</Text>
                <Image source={require("../../assets/images/Chevron-Right.png")} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    prescriptionsCard: {
        width: "100%",
        padding: 30,
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    prescriptionsCardHeading: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000",
    },
})

export default SimpleCard
