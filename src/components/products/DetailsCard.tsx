import { View, Text, StyleSheet } from "react-native"

const DetailsCard = ({
    heading,
    details,
}: {
    heading: string
    details: { title: string; value: string }[]
}): JSX.Element => {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeading}>{heading}</Text>
            {details.map((detail, index) => (
                <View
                    key={index}
                    style={[
                        styles.details,
                        {
                            borderBottomWidth: index === details.length - 1 ? 0 : 1,
                        },
                    ]}>
                    <Text style={styles.detailsText}>{detail.title}</Text>
                    <Text
                        style={[
                            styles.detailsDarkText,
                            {
                                textTransform: heading === "Posologies" ? "none" : "uppercase",
                            },
                        ]}>
                        {detail.value}
                    </Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    detailsContainer: {
        width: "100%",
        marginTop: 20,
        borderTopColor: "#B9B9B9",
        borderTopWidth: 1,
        backgroundColor: "#fff",
        padding: 20,
        paddingBottom: 0,
    },
    detailsHeading: {
        fontSize: 20,
        fontFamily: "SourceSansPro-Bold",
        color: "#000",
        paddingBottom: 10,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: 20,
        borderBottomColor: "#B9B9B9",
        borderBottomWidth: 1,
    },
    detailsText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        color: "#676767",
    },
    detailsDarkText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-SemiBold",
        color: "#000",
        textTransform: "uppercase",
        width: "50%",
        textAlign: "right",
    },
})

export default DetailsCard
