import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

/** ========================  PRODUCTS STACK TYPES  ======================== */

export type ProductsStackParamsList = {
    ProductsList: undefined
    ProductDetails: { productId: number | string }
}

export type ProductsStackNavProps<T extends keyof ProductsStackParamsList> = {
    navigation: StackNavigationProp<ProductsStackParamsList, T>
    route: RouteProp<ProductsStackParamsList, T>
}
