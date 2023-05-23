import { View, SafeAreaView, ScrollView } from "react-native"
import { NavBar, Heading, CustomContainer, CustomTextInput, WideButton, SelectOption } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import editClinicStyles from "./editClinicStyles"
import styles from "../../../assets/styles"

const EditClinic = ({ navigation }: { navigation: SettingsStackNavProps<"EditClinic">["navigation"] }): JSX.Element => {
    const cities = [
        { name: "ouarzazate" },
        { name: "casablanca" },
        { name: "rabat" },
        { name: "marrakech" },
        { name: "tanger" },
        { name: "fes" },
        { name: "meknes" },
        { name: "agadir" },
        { name: "oujda" },
    ]
    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={editClinicStyles.container}>
                    <Heading text="Cabinet" />
                    <View style={editClinicStyles.formContainer}>
                        <CustomContainer
                            label="Nom du cabinet"
                            element={<CustomTextInput placeholder="Cabinet Redouani" />}
                        />
                        <CustomContainer
                            label="Email du cabinet"
                            element={<CustomTextInput placeholder="some@cabinet.com" />}
                        />
                        <CustomContainer
                            label="Adresse du cabinet"
                            element={<SelectOption data={cities} initialValue="ouarzazate" noImg={true} />}
                        />
                        <CustomContainer label="Ville" element={<CustomTextInput placeholder="Paris" />} />
                        <CustomContainer label="Téléphone" element={<CustomTextInput placeholder="06 12 34 56 78" />} />
                        <CustomContainer label="Fax" element={<CustomTextInput placeholder="01 23 45 67 89" />} />
                        <WideButton text="Enregistrer" />
                    </View>
                </View>
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditClinic
