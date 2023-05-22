import { View, Image, ScrollView } from "react-native"
import { NavBar, TextButton, DetailsCard } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import profileStyles from "./profileStyles"

const Profile = ({ navigation }: { navigation: SettingsStackNavProps<"Profile">["navigation"] }): JSX.Element => {
    return (
        <ScrollView>
            <NavBar navigation={navigation} />
            <View style={profileStyles.container}>
                <Image source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }} style={profileStyles.image} />
                <TextButton text="Changer photo de profile" />
            </View>
            {/* General Infos */}
            <DetailsCard
                heading="Informations générales"
                edit={true}
                details={[
                    {
                        title: "Nom du Compte",
                        value: "Khalid Redouani",
                    },
                    {
                        title: "Spécialité",
                        value: "Médecin généraliste",
                    },
                    {
                        title: "Email",
                        value: "k.redouani@gmail.com",
                    },
                    {
                        title: "Téléphone",
                        value: "06 12 34 56 78",
                    },
                    {
                        title: "Date de naissance",
                        value: "01 novembre 1990",
                    },
                    {
                        title: "INPE",
                        value: "EE 123456",
                    },
                ]}
                onPress={() => navigation.navigate("EditProfile")}
            />
            {/* Cabinet */}
            <DetailsCard
                heading="Cabinet"
                edit={true}
                details={[
                    {
                        title: "Nom",
                        value: "Cabinet Redouani",
                    },
                    {
                        title: "Email du cabinet",
                        value: "redouani@cabinet.com",
                    },
                    {
                        title: "Adresse",
                        value: "Rue 123, Ville, Pays",
                    },
                    {
                        title: "Ville",
                        value: "Ville",
                    },
                    {
                        title: "Téléphone",
                        value: "06 12 34 56 78",
                    },
                    {
                        title: "Fax",
                        value: "06 12 34 56 78",
                    },
                ]}
                onPress={() => navigation.navigate("EditClinic")}
            />
        </ScrollView>
    )
}

export default Profile
