import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SettingsList, Profile, EditProfile, EditClinic } from "../../../screens"
import { SettingsStackParamsList } from "./@types"

const Stack = createStackNavigator<SettingsStackParamsList>()

const SettingsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="SettingsList"
                screenOptions={{ headerShown: false, animationEnabled: false }}>
                <Stack.Screen name="SettingsList" component={SettingsList} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="EditClinic" component={EditClinic} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SettingsStack
