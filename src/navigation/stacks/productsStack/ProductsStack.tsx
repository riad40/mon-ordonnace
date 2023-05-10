import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Products, ProductDetails } from "../../../screens"
import { stackNavigatorOptions } from "../../options"

const Stack = createStackNavigator()

const ProductsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Products" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsStack
