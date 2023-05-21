import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Products, ProductDetails } from "../../../screens"
import { stackNavigatorOptions } from "../../options"
import { ProductsStackParamsList } from "../../../@types/navigation"

const Stack = createStackNavigator<ProductsStackParamsList>()

const ProductsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="ProductsList" screenOptions={stackNavigatorOptions}>
                <Stack.Screen name="ProductsList" component={Products} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsStack
