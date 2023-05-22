import { View, Text, Image, Pressable } from "react-native"
import patientCardStyles from "./patientCardStyles"
import { Patient } from "../../../@types"

const PatientCard = ({ patient, onPress }: { patient: Patient; onPress?: () => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={patientCardStyles.container}>
                <View style={patientCardStyles.wrapper}>
                    <View style={patientCardStyles.imageWrapper}>
                        <Image source={{ uri: patient.image }} style={patientCardStyles.image} />
                    </View>
                    <View style={patientCardStyles.textWrapper}>
                        <Text style={patientCardStyles.name}>{patient.name}</Text>
                        <Text style={patientCardStyles.age}>{patient.age} ans</Text>
                    </View>
                </View>
                <Image source={require("../../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

export default PatientCard
