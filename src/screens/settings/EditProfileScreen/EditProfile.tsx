import { View, SafeAreaView, ScrollView } from "react-native"
import { NavBar, Heading, CustomContainer, CustomTextInput, WideButton } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import editProfileStyles from "./editProfileStyles"
import styles from "../../../assets/styles"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const EditProfile = ({
    navigation,
}: {
    navigation: SettingsStackNavProps<"EditProfile">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
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
                        <CustomContainer
                            label="Date de naissance"
                            element={<CustomTextInput placeholder="01/01/1990" />}
                        />
                        <CustomContainer label="INPE" element={<CustomTextInput placeholder="123456789" />} />
                        <WideButton text="Enregistrer" />
                    </View>
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile
