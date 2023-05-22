import { View, ScrollView } from "react-native"
import { NavBar, Heading, SubHeading, TextButton, SearchInput, ProductCard } from "../../../components"
import { ProductsStackNavProps } from "../../../navigation/stacks/productsStack/@types"
import productsListStyles from "./productsListStyles"
import products from "../../../helpers/data/products"

const ProductsList = ({
    navigation,
}: {
    navigation: ProductsStackNavProps<"ProductsList">["navigation"]
}): JSX.Element => {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <NavBar />
            <View style={productsListStyles.container}>
                <View style={productsListStyles.wrapper}>
                    <View>
                        <Heading text="Produits" />
                        <SubHeading text="45 300 Produits" />
                    </View>
                    <TextButton text="+ Suggérer un produit" />
                </View>
                <SearchInput placeholder="Rechercher un produit" />
            </View>

            {products.map((product, index) => (
                <ProductCard
                    product={product}
                    onPress={() => navigation.navigate("ProductDetails", { productId: product.productId })}
                    key={index}
                />
            ))}

            <View>
                <TextButton text="+ Suggérer un produit" style={productsListStyles.btnCenter} />
            </View>
        </ScrollView>
    )
}

export default ProductsList
