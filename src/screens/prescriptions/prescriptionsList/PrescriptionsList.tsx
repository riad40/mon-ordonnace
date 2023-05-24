import { View, ScrollView, SafeAreaView, FlatList } from "react-native"
import { NavBar, Header, PrescriptionCard, TextButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionsListStyles from "./prescriptionsListStyles"
import prescriptions from "../../../helpers/data/prescriptions"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const PrescriptionsList = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionsList">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <Header
                    heading="Ordonnances"
                    subHeading="45 000 ordonnances"
                    textButton="+ Nouvelle ordonnance"
                    placeholder="Rechercher une ordonnance"
                    onPress={() => navigation.navigate("AddPrescription")}
                />
                <View style={prescriptionsListStyles.container}>
                    <FlatList
                        data={prescriptions}
                        keyExtractor={item => item.prescriptionId}
                        renderItem={({ item }) => (
                            <PrescriptionCard
                                key={item.prescriptionId}
                                prescription={item}
                                onPress={() =>
                                    navigation.navigate("PrescriptionDetails", {
                                        prescriptionId: item.prescriptionId,
                                    })
                                }
                            />
                        )}
                    />
                </View>
                <View>
                    <TextButton text="+ Nouvelle ordonnance" style={prescriptionsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionsList
