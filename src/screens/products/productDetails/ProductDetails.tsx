import { View, Text } from "react-native"
import { NavBar } from "../../../components"
import { NavigationProp } from "@react-navigation/native"

const ProductDetails = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
    return (
        <View>
            <NavBar navigation={navigation} />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#000",
                }}>
                Détails du produit
            </Text>
        </View>
    )
}

export default ProductDetails
