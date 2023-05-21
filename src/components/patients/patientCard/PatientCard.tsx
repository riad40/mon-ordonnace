import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import patientCardStyles from "./patientCardStyles"

const PatientCard = ({
    patientName,
    patientAge,
    patientImage,
    onPress,
}: {
    patientName: string
    patientAge: number
    patientImage: any
    onPress?: () => void
}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={patientCardStyles.container}>
                <View style={patientCardStyles.wrapper}>
                    <View style={patientCardStyles.imageWrapper}>
                        <Image
                            source={require("../../../assets/images/patient-picture.png")}
                            style={patientCardStyles.image}
                        />
                    </View>
                    <View style={patientCardStyles.textWrapper}>
                        <Text style={patientCardStyles.name}>{patientName}</Text>
                        <Text style={patientCardStyles.age}>{patientAge} ans</Text>
                    </View>
                </View>
                <Image source={require("../../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

export default PatientCard
