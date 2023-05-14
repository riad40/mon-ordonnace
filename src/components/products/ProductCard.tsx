import { Image, StyleSheet, Text, Pressable, View } from "react-native"
import { Product } from "../../@types/products"

const ProductCard = ({ product, onPress }: { product: Product; onPress?: () => void }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                <View>
                    <View style={styles.cardContent}>
                        <Image source={require("../../assets/images/Profile.png")} style={styles.image} />
                        <View style={styles.details}>
                            <Text style={styles.name}>{product.name}</Text>
                            <Text style={styles.type}>{product.type}</Text>
                        </View>
                    </View>
                    <View style={styles.therapeuticClass}>
                        <Image source={require("../../assets/images/Location.png")} />
                        <Text style={styles.type}>{product.therapeuticClass}</Text>
                    </View>
                </View>
                <Image source={require("../../assets/images/More.png")} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderTopColor: "#E6E6E6",
        borderTopWidth: 1,
        borderBottomColor: "#E6E6E6",
        borderBottomWidth: 2,
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        borderRadius: 5,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    details: {
        marginLeft: 10,
        justifyContent: "space-between",
        height: 50,
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
        textTransform: "uppercase",
    },
    type: {
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#A2A2A2",
        textTransform: "uppercase",
    },
    therapeuticClass: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
})

export default ProductCard
