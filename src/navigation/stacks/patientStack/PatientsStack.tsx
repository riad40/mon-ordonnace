import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PatientsList, PatientDetails } from "../../../screens"
import { stackNavigatorOptions } from "../../options"
import { PatientStackParamsList } from "../../../@types/navigation"

const Stack = createStackNavigator<PatientStackParamsList>()

const PatientsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="PatientsList" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="PatientsList" component={PatientsList} />
                <Stack.Screen name="PatientDetails" component={PatientDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PatientsStack
