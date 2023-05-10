import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Products, ProductDetails } from "../../../screens"

const Stack = createStackNavigator()

const ProductsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="Products"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsStack
