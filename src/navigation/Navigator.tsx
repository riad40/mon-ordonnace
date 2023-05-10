import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { PatientsStack, PrescriptionsStack, ProductsStack, SettingsStack } from "./stacks"
import { Dashboard } from "../screens"

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Dashboard" component={Dashboard} />
                <Tab.Screen name="Products" component={ProductsStack} />
                <Tab.Screen name="Patients" component={PatientsStack} />
                <Tab.Screen name="Prescriptions" component={PrescriptionsStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
