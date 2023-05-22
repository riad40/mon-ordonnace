import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PatientsList, PatientDetails } from "../../../screens"
import { PatientStackParamsList } from "./@types"

const Stack = createStackNavigator<PatientStackParamsList>()

const PatientsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="PatientsList"
                screenOptions={{ headerShown: false, animationEnabled: false }}>
                <Stack.Screen name="PatientsList" component={PatientsList} />
                <Stack.Screen name="PatientDetails" component={PatientDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PatientsStack
