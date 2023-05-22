import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PrescriptionsList, PrescriptionDetails, AddPrescription } from "../../../screens"
import { PrescriptionsStackParamsList } from "./@types"

const Stack = createStackNavigator<PrescriptionsStackParamsList>()

const PrescriptionsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="PrescriptionsList"
                screenOptions={{ headerShown: false, animationEnabled: false }}>
                <Stack.Screen name="PrescriptionsList" component={PrescriptionsList} />
                <Stack.Screen name="PrescriptionDetails" component={PrescriptionDetails} />
                <Stack.Screen name="AddPrescription" component={AddPrescription} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PrescriptionsStack
