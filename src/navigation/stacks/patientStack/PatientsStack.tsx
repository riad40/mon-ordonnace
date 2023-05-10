import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Patients, PatientDetails } from "../../../screens"

const Stack = createStackNavigator()

const PatientsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="Patients"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="PatientsStack" component={Patients} />
                <Stack.Screen name="PatientDetails" component={PatientDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PatientsStack
