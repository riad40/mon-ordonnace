import { View } from "react-native"
import { NavBar, Heading, SubHeading, TextButton, SearchInput, ProductCard } from "../../../components"
import { ProductsStackNavProps } from "../../../@types/navigation"
import productsListStyles from "./productsListStyles"

const ProductsList = ({
    navigation,
}: {
    navigation: ProductsStackNavProps<"ProductsList">["navigation"]
}): JSX.Element => {
    return (
        <View>
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
            <ProductCard
                product={{
                    name: "VIGOREX CO 50MG B1 COMP",
                    type: "SILDENAFIL",
                    therapeuticClass: "HORMONE THYROIDIENNE",
                }}
                onPress={() => navigation.navigate("ProductDetails", { productId: 1 })}
            />
            <ProductCard
                product={{
                    name: "VIGOREX CO 50MG B1 COMP",
                    type: "SILDENAFIL",
                    therapeuticClass: "HORMONE THYROIDIENNE",
                }}
                onPress={() => navigation.navigate("ProductDetails", { productId: 1 })}
            />
            <View>
                <TextButton text="+ Suggérer un produit" style={productsListStyles.btnCenter} />
            </View>
        </View>
    )
}

export default ProductsList
