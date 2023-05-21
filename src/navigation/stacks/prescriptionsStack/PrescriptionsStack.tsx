import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PrescriptionsList, PrescriptionDetails, AddPrescription } from "../../../screens"
import { stackNavigatorOptions } from "../../options"
import { PrescriptionsStackParamsList } from "../../../@types/navigation"

const Stack = createStackNavigator<PrescriptionsStackParamsList>()

const PrescriptionsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="PrescriptionsList" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="PrescriptionsList" component={PrescriptionsList} />
                <Stack.Screen name="PrescriptionDetails" component={PrescriptionDetails} />
                <Stack.Screen name="AddPrescription" component={AddPrescription} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PrescriptionsStack
