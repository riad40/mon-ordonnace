import { View, ScrollView, SafeAreaView } from "react-native"
import { NavBar, Heading, SubHeading, TextButton, SearchInput, ProductCard, ProductsListSkeleton } from "../../../components"
import { ProductsStackNavProps } from "../../../navigation/stacks/productsStack/@types"
import productsListStyles from "./productsListStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useState, useEffect, useMemo } from "react"
import { useAppSelector, useAppDispatch } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { getProducts } from "../../../services"

const ProductsList = ({ navigation }: { navigation: ProductsStackNavProps<"ProductsList">["navigation"] }): JSX.Element => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const { products, loading } = useAppSelector((state: RootState) => state.products)

    const { productsCount } = useAppSelector((state: RootState) => state.dashboard)

    const [search, setSearch] = useState<string>("")

    const onSearch = (text: string) => {
        setSearch(text)
    }

    const filteredProducts = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    }, [products, search])

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={productsListStyles.container}>
                    <View style={productsListStyles.wrapper}>
                        <View>
                            <Heading text="Produits" />
                            <SubHeading text={`${productsCount} Produits`} />
                        </View>
                        <TextButton text="+ Suggérer un produit" />
                    </View>
                    <SearchInput placeholder="Rechercher un produit" onChangeText={onSearch} />
                </View>

                {loading ? (
                    <>
                        <ProductsListSkeleton />
                        <ProductsListSkeleton />
                        <ProductsListSkeleton />
                        <ProductsListSkeleton />
                    </>
                ) : (
                    filteredProducts.map(product => <ProductCard product={product} onPress={() => navigation.navigate("ProductDetails", { productId: product._id })} key={product._id} />)
                )}

                <View>
                    <TextButton text="+ Suggérer un produit" style={productsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductsList
