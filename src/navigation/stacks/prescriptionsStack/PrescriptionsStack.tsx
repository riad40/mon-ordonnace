import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Prescriptions, PrescriptionDetails, AddPrescription } from "../../../screens"
import { stackNavigatorOptions } from "../../options"

const Stack = createStackNavigator()

const PrescriptionsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Prescriptions" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="Prescriptions" component={Prescriptions} />
                <Stack.Screen name="PrescriptionDetails" component={PrescriptionDetails} />
                <Stack.Screen name="AddPrescription" component={AddPrescription} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PrescriptionsStack
