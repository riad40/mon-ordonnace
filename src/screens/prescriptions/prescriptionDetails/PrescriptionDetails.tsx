import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { NavBar, PrescriptionHeader, WideButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionDetailsStyles from "./prescriptionDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const PrescriptionDetails = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionDetails">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={prescriptionDetailsStyles.container}>
                    <PrescriptionHeader date="12/12/2020" />
                    <View style={prescriptionDetailsStyles.patientNameWrapper}>
                        <Text style={prescriptionDetailsStyles.patientNameBold}>Nom du patient :</Text>
                        <Text style={prescriptionDetailsStyles.patientName}>John Doe</Text>
                    </View>

                    <View style={prescriptionDetailsStyles.productsWrapper}>
                        <Text style={prescriptionDetailsStyles.productTitle}>some doliprane thing or whatever</Text>
                        <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                            <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>
                                Prendre pendant 3 semaine
                            </Text>
                            <Text style={prescriptionDetailsStyles.productsDosagesDosage}>
                                1 comprimé après chaque repas
                            </Text>
                        </View>
                    </View>
                </View>
                <WideButton text="Imprimer" />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionDetails
