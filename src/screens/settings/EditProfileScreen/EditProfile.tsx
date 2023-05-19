import { View, Text, ScrollView } from "react-native"
import { NavBar, Heading, CustomContainer, CustomTextInput, WideButton } from "../../../components"
import { SettingsStackNavProps } from "../../../@types/navigation"
import editProfileStyles from "./editProfileStyles"

const EditProfile = ({
    navigation,
}: {
    navigation: SettingsStackNavProps<"EditProfile">["navigation"]
}): JSX.Element => {
    return (
        <ScrollView>
            <NavBar navigation={navigation} />

            <View style={editProfileStyles.container}>
                <Heading text="Informations générales" />
                <View style={editProfileStyles.formContainer}>
                    <CustomContainer
                        label="Nom du compte"
                        element={<CustomTextInput placeholder="Khalid Redouani" />}
                    />
                    <CustomContainer
                        label="Spécialité"
                        element={<CustomTextInput placeholder="Médecin généraliste" />}
                    />
                    <CustomContainer label="Téléphone" element={<CustomTextInput placeholder="06 12 34 56 78" />} />
                    <CustomContainer label="Email" element={<CustomTextInput placeholder="some@email.com" />} />
                    <CustomContainer label="Date de naissance" element={<CustomTextInput placeholder="01/01/1990" />} />
                    <CustomContainer label="INPE" element={<CustomTextInput placeholder="123456789" />} />
                    <WideButton text="Enregistrer" />
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile
