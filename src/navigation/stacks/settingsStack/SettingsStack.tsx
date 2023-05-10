import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Settings, Profile, EditProfile, EditClinic } from "../../../screens"
import { stackNavigatorOptions } from "../../options"

const Stack = createStackNavigator()

const SettingsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Settings" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="EditClinic" component={EditClinic} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SettingsStack
