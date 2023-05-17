import { View, Text } from "react-native"
import { NavBar, PrescriptionHeader } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../@types/navigation"
import prescriptionDetailsStyles from "./prescriptionDetailsStyles"

const PrescriptionDetails = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionDetails">["navigation"]
}): JSX.Element => {
    return (
        <View>
            <NavBar navigation={navigation} />
            <View style={prescriptionDetailsStyles.container}>
                <PrescriptionHeader date="12/12/2020" />

                <View style={prescriptionDetailsStyles.patientNameWrapper}>
                    <Text style={prescriptionDetailsStyles.patientNameBold}>Nom du patient :</Text>
                    <Text style={prescriptionDetailsStyles.patientName}>John Doe</Text>
                </View>
                <View style={prescriptionDetailsStyles.productsWrapper}>
                    <Text style={prescriptionDetailsStyles.productTitle}>JGHSHGDHGDJGHGDGh</Text>
                    <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                        <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>12/12/2020 - 12/12/2020</Text>
                        <Text style={prescriptionDetailsStyles.productsDosagesDosage}>1 comprimé</Text>
                    </View>
                </View>
                <View style={prescriptionDetailsStyles.productsWrapper}>
                    <Text style={prescriptionDetailsStyles.productTitle}>JGHSHGDHGDJGHGDGh</Text>
                    <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                        <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>12/12/2020 - 12/12/2020</Text>
                        <Text style={prescriptionDetailsStyles.productsDosagesDosage}>1 comprimé</Text>
                    </View>
                </View>
                <View style={prescriptionDetailsStyles.productsWrapper}>
                    <Text style={prescriptionDetailsStyles.productTitle}>JGHSHGDHGDJGHGDGh</Text>
                    <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                        <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>12/12/2020 - 12/12/2020</Text>
                        <Text style={prescriptionDetailsStyles.productsDosagesDosage}>1 comprimé</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PrescriptionDetails
