import { Image, Text, Pressable, View } from "react-native"
import { Product } from "../../../@types/products"
import productCardStyles from "./productCardStyles"

const ProductCard = ({ product, onPress }: { product: Product; onPress?: () => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={productCardStyles.card}>
                <View>
                    <View style={productCardStyles.cardContent}>
                        <Image source={{ uri: product.image }} style={productCardStyles.image} />
                        <View style={productCardStyles.details}>
                            <Text style={productCardStyles.name}>{product.name}</Text>
                            <Text style={productCardStyles.type}>{product.type}</Text>
                        </View>
                    </View>
                    <View style={productCardStyles.therapeuticClass}>
                        <Image source={require("../../../assets/images/Location.png")} style={{ marginRight: 5 }} />
                        <Text style={productCardStyles.type}>{product.therapeuticClass}</Text>
                    </View>
                </View>
                <Image source={require("../../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

export default ProductCard
