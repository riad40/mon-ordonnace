import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Products, ProductDetails } from "../../../screens"
import { ProductsStackParamsList } from "./@types"

const Stack = createStackNavigator<ProductsStackParamsList>()

const ProductsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="ProductsList"
                screenOptions={{ headerShown: false, animationEnabled: false }}>
                <Stack.Screen name="ProductsList" component={Products} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsStack
