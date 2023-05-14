import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { PatientsStack, PrescriptionsStack, ProductsStack, SettingsStack } from "./stacks"
import { Dashboard } from "../screens"
import { TabIcon } from "../components"
import { BottomTabsParamsList } from "../@types/navigation"

const Tab = createBottomTabNavigator<BottomTabsParamsList>()

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                {/* Dashboard screen */}
                <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={require("../assets/images/home-inactive.png")}
                                iconActive={require("../assets/images/home-active.png")}
                            />
                        ),
                    }}
                />
                {/* Products screen */}
                <Tab.Screen
                    name="Products"
                    component={ProductsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={require("../assets/images/pills-inactive.png")}
                                iconActive={require("../assets/images/pills-active.png")}
                            />
                        ),
                    }}
                />
                {/* Prescriptions screen */}
                <Tab.Screen
                    name="Prescriptions"
                    component={PrescriptionsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={require("../assets/images/prescription-inactive.png")}
                                iconActive={require("../assets/images/prescription-active.png")}
                            />
                        ),
                    }}
                />
                {/* Patients screen */}
                <Tab.Screen
                    name="Patients"
                    component={PatientsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={require("../assets/images/patient-inactive.png")}
                                iconActive={require("../assets/images/patient-active.png")}
                            />
                        ),
                    }}
                />
                {/* Settings screen */}
                <Tab.Screen
                    name="Settings"
                    component={SettingsStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={require("../assets/images/settings-inactive.png")}
                                iconActive={require("../assets/images/settings-active.png")}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
