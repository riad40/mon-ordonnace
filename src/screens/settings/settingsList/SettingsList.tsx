import { View, SafeAreaView, ScrollView } from "react-native"
import { NavBar, SimpleCard, Heading } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import settingsListStyles from "./settingsListStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { RootState } from "../../../state/store"
import { useAppSelector } from "../../../state/hooks"

const SettingsList = ({ navigation }: { navigation: SettingsStackNavProps<"SettingsList">["navigation"] }): JSX.Element => {
    const { user } = useAppSelector((state: RootState) => state.profile)

    return (
        <SafeAreaView>
            <ScrollView style={styles.appContainer}>
                <NavBar />
                <View style={settingsListStyles.container}>
                    <Heading text={`${user?.fullName}`} />
                </View>
                <SimpleCard text="Profile" onPress={() => navigation.navigate("Profile")} />
                <SimpleCard text="Changer mon compte" />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsList
