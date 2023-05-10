import { View, Text, Button } from "react-native"
import { NavBar } from "../../components"
import { NavigationProp } from "@react-navigation/native"

const Products = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
    return (
        <View>
            <NavBar />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#000",
                }}>
                Produits Screen
            </Text>
            <View
                style={{
                    marginTop: 20,
                    width: 200,
                    alignSelf: "center",
                }}>
                <Button title="Go to Product Details" onPress={() => navigation.navigate("ProductDetails")} />
            </View>
        </View>
    )
}

export default Products
