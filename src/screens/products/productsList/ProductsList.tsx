import { View, ScrollView, SafeAreaView, FlatList } from "react-native"
import { NavBar, Heading, SubHeading, TextButton, SearchInput, ProductCard } from "../../../components"
import { ProductsStackNavProps } from "../../../navigation/stacks/productsStack/@types"
import productsListStyles from "./productsListStyles"
import products from "../../../helpers/data/products"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const ProductsList = ({
    navigation,
}: {
    navigation: ProductsStackNavProps<"ProductsList">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
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

                <FlatList
                    data={products}
                    keyExtractor={item => item.productId}
                    renderItem={({ item }) => (
                        <ProductCard
                            product={item}
                            onPress={() => navigation.navigate("ProductDetails", { productId: item.productId })}
                        />
                    )}
                />

                <View>
                    <TextButton text="+ Suggérer un produit" style={productsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductsList
