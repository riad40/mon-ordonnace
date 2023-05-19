import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const DetailsCard = ({
    heading,
    details,
    edit,
    onPress,
}: {
    heading: string
    details: { title: string; value: string }[]
    edit?: boolean
    onPress?: () => void
}): JSX.Element => {
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.detailsWrapper}>
                <Text style={styles.detailsHeading}>{heading}</Text>
                {edit && (
                    <TouchableOpacity style={styles.editButton} onPress={onPress}>
                        <Image source={require("../../assets/images/pen.png")} />
                        <Text style={styles.editText}>Modifier</Text>
                    </TouchableOpacity>
                )}
            </View>
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
                    <Text style={styles.detailsDarkText}>{detail.value}</Text>
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
    detailsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        width: "50%",
        textAlign: "right",
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    editText: {
        fontSize: 16,
        fontFamily: "SourceSansPro-Bold",
        color: "#18B1D4",
    },
})

export default DetailsCard
