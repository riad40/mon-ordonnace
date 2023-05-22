import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { Prescription } from "../../../@types"
import prescriptionCardStyles from "./prescriptionCardStyles"

const PrescriptionCard = ({
    prescription,
    onPress,
}: {
    prescription: Prescription
    onPress: () => void
}): JSX.Element => {
    const styles = StyleSheet.create({
        statusWrapper: {
            backgroundColor: prescription.status === "Enregistrée" ? "#0DD05F" : "#F8C436",
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
    })
    return (
        <Pressable onPress={onPress}>
            <View style={prescriptionCardStyles.mainContainer}>
                <View style={prescriptionCardStyles.container}>
                    <View style={prescriptionCardStyles.wrapper}>
                        <View style={prescriptionCardStyles.imageWrapper}>
                            <Image source={{ uri: prescription.image }} style={prescriptionCardStyles.image} />
                        </View>
                        <View style={prescriptionCardStyles.textWrapper}>
                            <Text style={prescriptionCardStyles.name}>{prescription.patientName}</Text>
                            <Text style={prescriptionCardStyles.date}>{prescription.date}</Text>
                        </View>
                    </View>
                    <Image source={require("../../../assets/images/More.png")} />
                </View>
                <View style={prescriptionCardStyles.statuswrapper}>
                    <Text style={prescriptionCardStyles.prescriptionId}>ID: {prescription.prescriptionId}</Text>
                    <View style={styles.statusWrapper}>
                        <Text style={prescriptionCardStyles.status}>{prescription.status}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default PrescriptionCard
