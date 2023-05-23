import { View, SafeAreaView, ScrollView } from "react-native"
import { NavBar, SimpleCard, Heading } from "../../../components"
import { SettingsStackNavProps } from "../../../navigation/stacks/settingsStack/@types"
import settingsListStyles from "./settingsListStyles"
import styles from "../../../assets/styles"

const SettingsList = ({
    navigation,
}: {
    navigation: SettingsStackNavProps<"SettingsList">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.appContainer}>
                <NavBar />
                <View style={settingsListStyles.container}>
                    <Heading text="Abderazzaq Hakimi" />
                </View>
                <SimpleCard text="Profile" onPress={() => navigation.navigate("Profile")} />
                <SimpleCard text="Changer mon compte" />
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsList
