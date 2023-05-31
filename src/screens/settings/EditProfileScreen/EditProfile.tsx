import { View, SafeAreaView, ScrollView, Text } from "react-native"
import { NavBar, Heading, CustomContainer, CustomTextInput, WideButton } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import editProfileStyles from "./editProfileStyles"
import styles from "../../../assets/styles"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { updateUserInfos } from "../../../services/profileServices"

const EditProfile = ({ navigation, route }: { navigation: SettingsStackNavProps<"EditProfile">["navigation"]; route: SettingsStackNavProps<"EditProfile">["route"] }): JSX.Element => {
    const { user } = route.params

    const [userData, setUserData] = useState({
        fullName: user?.fullName,
        speciality: user?.speciality,
        phone: user?.phone,
        email: user?.email,
        dateOfBirth: user?.dateOfBirth,
        inpe: user?.inpe,
    })

    const dispatch = useAppDispatch()

    const { loading, error } = useAppSelector(state => state.profile)

    const handleSave = () => {
        dispatch(updateUserInfos(userData))

        if (error) {
            console.log(error)
            return
        }

        navigation.goBack()
    }

    if (loading)
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={editProfileStyles.container}>
                    <Heading text="Informations générales" />
                    <View style={editProfileStyles.formContainer}>
                        <CustomContainer label="Nom du compte" element={<CustomTextInput placeholder="Khalid Redouani" value={userData.fullName} onChangeText={text => setUserData({ ...userData, fullName: text })} />} />
                        <CustomContainer label="Spécialité" element={<CustomTextInput placeholder="Médecin généraliste" value={userData.speciality} onChangeText={text => setUserData({ ...userData, speciality: text })} />} />

                        <CustomContainer label="Téléphone" element={<CustomTextInput placeholder="06 12 34 56 78" value={userData.phone} onChangeText={text => setUserData({ ...userData, phone: text })} />} />
                        <CustomContainer label="Email" element={<CustomTextInput placeholder="some@email.com" value={userData.email} onChangeText={text => setUserData({ ...userData, email: text })} />} />
                        <CustomContainer label="Date de naissance" element={<CustomTextInput placeholder="01/01/1990" value={userData.dateOfBirth} onChangeText={text => setUserData({ ...userData, dateOfBirth: text })} />} />
                        <CustomContainer label="INPE" element={<CustomTextInput placeholder="123456789" value={userData.inpe} onChangeText={text => setUserData({ ...userData, inpe: text })} />} />
                    </View>
                    <WideButton text="Enregistrer" onPress={handleSave} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile
