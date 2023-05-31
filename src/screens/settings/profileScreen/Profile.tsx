import { View, Image, ScrollView, SafeAreaView, Text } from "react-native"
import { NavBar, TextButton, DetailsCard, ProfileIcon } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import profileStyles from "./profileStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { getUserInfos, getClinicInfos } from "../../../services/profileServices"
import { RootState } from "../../../state/store"
import API_URL from "../../../configs/API_URL"

const Profile = ({ navigation }: { navigation: SettingsStackNavProps<"Profile">["navigation"] }): JSX.Element => {
    const dispatch = useAppDispatch()

    const { user, clinic, loading } = useAppSelector((state: RootState) => state.profile)

    useEffect(() => {
        dispatch(getUserInfos())
        dispatch(getClinicInfos())
    }, [dispatch])

    if (loading)
        return (
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: hp("10%"),
                        fontSize: 20,
                    }}>
                    Loading...
                </Text>
            </View>
        )

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={profileStyles.container}>
                    {user.avatar ? <Image source={{ uri: API_URL + user?.avatar }} style={profileStyles.image} /> : <ProfileIcon firstName={user?.fullName.split(" ")[0] || "No"} lastName={user?.fullName.split(" ")[1] || "Name"} />}
                    <TextButton text="Changer photo de profile" />
                </View>
                {/* General Infos */}
                <DetailsCard
                    heading="Informations générales"
                    edit={true}
                    details={[
                        {
                            title: "Nom du Compte",
                            value: user?.fullName,
                        },
                        {
                            title: "Spécialité",
                            value: user.speciality,
                        },
                        {
                            title: "Email",
                            value: user.email,
                        },
                        {
                            title: "Téléphone",
                            value: user.phone,
                        },
                        {
                            title: "Date de naissance",
                            value: user.dateOfBirth,
                        },
                        {
                            title: "INPE",
                            value: user.inpe,
                        },
                    ]}
                    onPress={() => navigation.navigate("EditProfile", { user })}
                />
                {/* Cabinet */}
                <DetailsCard
                    heading="Cabinet"
                    edit={true}
                    details={[
                        {
                            title: "Nom",
                            value: clinic?.name,
                        },
                        {
                            title: "Email du cabinet",
                            value: clinic?.email,
                        },
                        {
                            title: "Adresse",
                            value: clinic?.address,
                        },
                        {
                            title: "Ville",
                            value: clinic?.city,
                        },
                        {
                            title: "Téléphone",
                            value: clinic?.phone,
                        },
                        {
                            title: "Fax",
                            value: clinic?.fax,
                        },
                    ]}
                    onPress={() => navigation.navigate("EditClinic", { clinic })}
                />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile
