import { View, ScrollView, Touchable, TouchableOpacity, Text } from "react-native"
import {
    NavBar,
    PrescriptionHeader,
    SelectOption,
    CustomContainer,
    TextButton,
    CustomTextInput,
    WideButton,
} from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import addPrescriptionStyles from "./addPrescriptionStyles"
import Ionicons from "react-native-vector-icons/Ionicons"

const AddPrescription = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"AddPrescription">["navigation"]
}): JSX.Element => {
    const patients = [
        { name: "Khadija El Idrissi" },
        { name: "Imran Redouani" },
        { name: "Aziz Ait El Cadi" },
        { name: "Fatima El Idrissi" },
    ]

    const products = [
        { name: "DOLIPRANE CO 1000MG B8 COMP EFFER" },
        { name: "NURAVIT SI 125ML SIROP" },
        { name: "Doliprane 500mg 16 comprimés" },
        { name: "VIGOREX CO 50MG B1 COMP" },
    ]

    const dosages = [
        { name: "1 fois après chaque repas" },
        { name: "2 fois avant chaque repas" },
        { name: "1 fois avant de dormir" },
        { name: "1 fois après dejeuner" },
    ]

    return (
        <ScrollView nestedScrollEnabled={true}>
            <NavBar navigation={navigation} />
            <View style={addPrescriptionStyles.container}>
                <PrescriptionHeader date="12/12/2020" />
                <View style={addPrescriptionStyles.leftTextButtonWrapper}>
                    <TextButton text="Choisir un modèle" style={{ paddingHorizontal: 0 }} />
                    <Ionicons name="caret-down-outline" size={20} color="#18B1D4" style={{ paddingTop: 2 }} />
                </View>
                <View style={addPrescriptionStyles.formWrapper}>
                    {/* Select patient */}
                    <CustomContainer
                        label="Patient"
                        element={<SelectOption data={patients} initialValue={patients[0].name} noImg={false} />}
                    />
                    {/* Select product */}
                    <CustomContainer
                        label="Produit"
                        element={<SelectOption data={products} initialValue={products[0].name} noImg={true} />}
                    />
                    {/* Select dosage */}
                    <CustomContainer
                        label="Posologie"
                        element={<SelectOption data={dosages} initialValue={dosages[0].name} noImg={true} />}
                    />
                    {/* Enter duration */}
                    <CustomContainer
                        label="Durée du traitement"
                        element={<CustomTextInput placeholder="Durée du traitement" />}
                    />
                    <TouchableOpacity style={addPrescriptionStyles.button}>
                        <Text style={addPrescriptionStyles.buttonText}>Ajouter un produit</Text>
                    </TouchableOpacity>
                    <TextButton text="+ Rédiger un commentaire" />
                </View>
            </View>
            <WideButton text="Enregistrer" />
        </ScrollView>
    )
}

export default AddPrescription
