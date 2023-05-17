import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { Prescription } from "../../@types/prescriptions"

const PrescriptionCard = ({
    prescription,
    onPress,
}: {
    prescription: Prescription
    onPress: () => void
}): JSX.Element => {
    const styles = StyleSheet.create({
        mainContainer: {
            borderBottomWidth: 1,
            borderBottomColor: "#E5E5E5",
        },

        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        wrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
        },
        imageWrapper: {
            width: 50,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            borderRadius: 10,
        },
        textWrapper: {
            marginLeft: 10,
            justifyContent: "space-between",
            height: 45,
        },
        name: {
            fontFamily: "SourceSansPro-Bold",
            fontSize: 16,
            color: "#000000",
        },
        date: {
            fontFamily: "SourceSansPro-SemiBold",
            fontSize: 16,
            color: "#B9B9B9",
        },
        statuswrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 50,
            paddingBottom: 20,
        },
        statusWrapper: {
            backgroundColor: prescription.status === "Enregistrée" ? "#0DD05F" : "#F8C436",
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
        prescriptionId: {
            fontFamily: "SourceSansPro-SemiBold",
            fontSize: 16,
            color: "#939393",
        },
        status: {
            fontFamily: "SourceSansPro-Bold",
            fontSize: 14,
            color: "#FFFFFF",
        },
    })
    return (
        <Pressable onPress={onPress}>
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require("../../assets/images/prescription-profile.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.name}>{prescription.patientName}</Text>
                            <Text style={styles.date}>{prescription.date}</Text>
                        </View>
                    </View>
                    <Image source={require("../../assets/images/More.png")} />
                </View>
                <View style={styles.statuswrapper}>
                    <Text style={styles.prescriptionId}>ID: {prescription.prescriptionId}</Text>
                    <View style={styles.statusWrapper}>
                        <Text style={styles.status}>{prescription.status}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default PrescriptionCard
