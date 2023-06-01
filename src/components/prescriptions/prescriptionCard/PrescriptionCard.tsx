import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { Prescription } from "../../../@types"
import prescriptionCardStyles from "./prescriptionCardStyles"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import formatDate from "../../../helpers/formatDate"

const PrescriptionCard = ({ prescription, onPress }: { prescription: Prescription; onPress: () => void }): JSX.Element => {
    const styles = StyleSheet.create({
        statusWrapper: {
            backgroundColor: prescription.status === "Enregistrée" ? "#0DD05F" : "#F8C436",
            borderRadius: hp("0.5%"),
            paddingHorizontal: wp("2%"),
            paddingVertical: hp("0.5%"),
        },
    })

    return (
        <Pressable onPress={onPress}>
            <View style={prescriptionCardStyles.mainContainer}>
                <View style={prescriptionCardStyles.container}>
                    <View style={prescriptionCardStyles.wrapper}>
                        <View style={prescriptionCardStyles.imageWrapper}>
                            <Image source={{ uri: prescription.avatar }} style={prescriptionCardStyles.image} />
                        </View>
                        <View style={prescriptionCardStyles.textWrapper}>
                            <Text style={prescriptionCardStyles.name}>{prescription.patient}</Text>
                            <Text style={prescriptionCardStyles.date}>{formatDate(prescription.createdAt)}</Text>
                        </View>
                    </View>
                    <Image source={require("../../../assets/images/More.png")} />
                </View>
                <View style={prescriptionCardStyles.statuswrapper}>
                    <Text style={prescriptionCardStyles.prescriptionId}>ID: {prescription._id}</Text>
                    <View style={styles.statusWrapper}>
                        <Text style={prescriptionCardStyles.status}>{prescription.status}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default PrescriptionCard
