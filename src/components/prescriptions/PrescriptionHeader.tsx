import { View, Text, StyleSheet } from "react-native"

const PrescriptionDetails = ({ date }: { date: string }): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Ordonnance</Text>
            </View>
            <View style={styles.dateWrapper}>
                <Text style={styles.date}>Le {date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    titleWrapper: {
        width: "40%",
        backgroundColor: "#18B1D4",
        paddingVertical: 10,
    },
    title: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#FFFFFF",
        textTransform: "uppercase",
        paddingLeft: 10,
    },
    dateWrapper: {
        width: "60%",
        backgroundColor: "#E8F8FA",
        paddingVertical: 10,
    },
    date: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#516783",
        paddingRight: 10,
        textAlign: "right",
    },
})

export default PrescriptionDetails
