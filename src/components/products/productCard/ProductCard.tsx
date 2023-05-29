import { Image, Text, Pressable, View } from "react-native"
import { Product } from "../../../@types/"
import productCardStyles from "./productCardStyles"
import API_URL from "../../../configs/API_URL"

const ProductCard = ({ product, onPress }: { product: Product; onPress?: () => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={productCardStyles.card}>
                <View>
                    <View style={productCardStyles.cardContent}>
                        <Image source={{ uri: API_URL + product.avatar }} style={productCardStyles.image} />
                        <View style={productCardStyles.details}>
                            <Text style={productCardStyles.name}>{product.name}</Text>
                            <Text style={productCardStyles.type}>{product.dci}</Text>
                        </View>
                    </View>
                    <View style={productCardStyles.therapeuticClass}>
                        <Image source={require("../../../assets/images/Location.png")} style={{ marginRight: 5 }} />
                        <Text style={productCardStyles.type}>{product.classTherapeutic}</Text>
                    </View>
                </View>
                <Image source={require("../../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

export default ProductCard
