import { View, SafeAreaView, ScrollView, Alert } from "react-native"
import { NavBar, Heading, CustomContainer, CustomTextInput, WideButton, SelectOption } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import editClinicStyles from "./editClinicStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { updateClinicInfos } from "../../../services/profileServices"
import cities from "../../../helpers/data/cities"
import { RootState } from "../../../state/store"
import FormValidation from "../../../helpers/formValidation"

const EditClinic = ({ navigation, route }: { navigation: SettingsStackNavProps<"EditClinic">["navigation"]; route: SettingsStackNavProps<"EditClinic">["route"] }): JSX.Element => {
    const { clinic } = route.params

    const [clinicData, setClinicData] = useState({
        name: clinic?.name,
        email: clinic?.email,
        address: clinic?.address,
        city: clinic?.city,
        phone: clinic?.phone,
        fax: clinic?.fax,
    })

    const dispatch = useAppDispatch()

    const { loading, error } = useAppSelector((state: RootState) => state.profile)

    const { name, email, address, phone, fax } = clinicData

    const valid = FormValidation.editClinicValidation(name, email, address, phone, fax)

    const handleSave = () => {
        if (Object.keys(valid).length > 0) return Alert.alert("Erreur", "Veuillez remplir tous les champs correctement")

        dispatch(updateClinicInfos(clinicData))

        if (error) return Alert.alert("Erreur", "Une erreur est survenue")

        Alert.alert(
            "Succès",
            "Vos informations ont été mises à jour",
            [
                {
                    text: "OK",
                    onPress: () => navigation.goBack(),
                },
            ],
            {
                cancelable: false,
            },
        )
    }

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={editClinicStyles.container}>
                    <Heading text="Cabinet" />
                    <View style={editClinicStyles.formContainer}>
                        <CustomContainer
                            label="Nom du cabinet"
                            validText={valid?.clinicName}
                            element={<CustomTextInput placeholder="Cabinet Redouani" value={clinicData.name} onChangeText={text => setClinicData({ ...clinicData, name: text })} />}
                        />
                        <CustomContainer
                            label="Email du cabinet"
                            validText={valid?.clinicEmail}
                            element={<CustomTextInput placeholder="some@cabinet.com" value={clinicData.email} onChangeText={text => setClinicData({ ...clinicData, email: text })} />}
                        />
                        <CustomContainer
                            label="Adresse du cabinet"
                            validText={valid?.clinicAddress}
                            element={<CustomTextInput placeholder="2 parc des princes" value={clinicData.address} onChangeText={text => setClinicData({ ...clinicData, address: text })} />}
                        />
                        <CustomContainer
                            label="Ville"
                            element={<SelectOption data={cities} initialValue={{ name: "ouarzazate", avatar: null }} onSelect={item => setClinicData({ ...clinicData, city: item.name })} />}
                        />
                        <CustomContainer
                            label="Téléphone"
                            validText={valid?.clinicPhoneNumber}
                            element={<CustomTextInput placeholder="06 12 34 56 78" value={clinicData.phone} onChangeText={text => setClinicData({ ...clinicData, phone: text })} />}
                        />
                        <CustomContainer
                            label="Fax"
                            validText={valid?.clinicFax}
                            element={<CustomTextInput placeholder="01 23 45 67 89" value={clinicData.fax} onChangeText={text => setClinicData({ ...clinicData, fax: text })} />}
                        />
                        <WideButton text="Enregistrer" onPress={handleSave} />
                    </View>
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditClinic
