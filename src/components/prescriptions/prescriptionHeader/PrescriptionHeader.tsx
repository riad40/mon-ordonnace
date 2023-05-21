import { View, Text } from "react-native"
import prescriptionHeaderStyles from "./prescriptionHeaderStyles"

const PrescriptionDetails = ({ date }: { date: string }): JSX.Element => {
    return (
        <View style={prescriptionHeaderStyles.container}>
            <View style={prescriptionHeaderStyles.titleWrapper}>
                <Text style={prescriptionHeaderStyles.title}>Ordonnance</Text>
            </View>
            <View style={prescriptionHeaderStyles.dateWrapper}>
                <Text style={prescriptionHeaderStyles.date}>Le {date}</Text>
            </View>
        </View>
    )
}

export default PrescriptionDetails
