import { View, ScrollView } from "react-native"
import { NavBar, Header, PrescriptionCard, TextButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../@types/navigation"
import prescriptionsListStyles from "./prescriptionsListStyles"
import prescriptions from "../../../helpers/data/prescriptions"

const PrescriptionsList = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionsList">["navigation"]
}): JSX.Element => {
    return (
        <ScrollView>
            <NavBar />
            <Header
                heading="Ordonnances"
                subHeading="45 000 ordonnances"
                textButton="+ Nouvelle ordonnance"
                placeholder="Rechercher une ordonnance"
            />
            <View style={prescriptionsListStyles.container}>
                {prescriptions.map(prescription => (
                    <PrescriptionCard
                        key={prescription.prescriptionId}
                        prescription={prescription}
                        onPress={() =>
                            navigation.navigate("PrescriptionDetails", { prescriptionId: prescription.prescriptionId })
                        }
                    />
                ))}
            </View>
            <View>
                <TextButton text="+ Nouvelle ordonnance" style={prescriptionsListStyles.btnCenter} />
            </View>
        </ScrollView>
    )
}

export default PrescriptionsList
