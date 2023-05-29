import { View, Text, Image, Pressable } from "react-native"
import patientCardStyles from "./patientCardStyles"
import { Patient } from "../../../@types"
import API_URL from "../../../configs/API_URL"
import calculateAge from "../../../helpers/calculateAge"

const PatientCard = ({ patient, onPress }: { patient: Patient; onPress?: () => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={patientCardStyles.container}>
                <View style={patientCardStyles.wrapper}>
                    <View style={patientCardStyles.imageWrapper}>
                        <Image source={{ uri: API_URL + patient.avatar }} style={patientCardStyles.image} />
                    </View>
                    <View style={patientCardStyles.textWrapper}>
                        <Text style={patientCardStyles.name}>
                            {patient.firstName} {patient.lastName}
                        </Text>
                        <Text style={patientCardStyles.age}>{calculateAge(patient.dateOfBirth)} ans</Text>
                    </View>
                </View>
                <Image source={require("../../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

export default PatientCard
