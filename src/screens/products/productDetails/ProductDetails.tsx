import { View, Text, ScrollView, Image, SafeAreaView } from "react-native"
import { NavBar, DetailsCard, Loading } from "../../../components"
import { ProductsStackNavProps } from "../../../navigation/stacks/productsStack/@types"
import productDetailsStyles from "./productDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { getProductById } from "../../../services/productServices"

const ProductDetails = ({ navigation, route }: { navigation: ProductsStackNavProps<"ProductDetails">["navigation"]; route: ProductsStackNavProps<"ProductDetails">["route"] }): JSX.Element => {
    const { productId } = route.params

    const { product, loading } = useAppSelector((state: RootState) => state.products)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    if (loading) return <Loading />

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={productDetailsStyles.container}>
                    <Image source={{ uri: product?.avatar }} style={productDetailsStyles.image} />
                    <Text style={productDetailsStyles.name}>{product?.name}</Text>
                    <Text style={productDetailsStyles.type}>{product?.dci}</Text>
                </View>
                {/* General informations */}
                <DetailsCard
                    heading="Informations générales"
                    details={[
                        {
                            title: "Nom du produit",
                            value: product?.name as string,
                        },
                        {
                            title: "DCI",
                            value: product?.dci as string,
                        },
                        {
                            title: "Classe thérapeutique",
                            value: product?.classTherapeutic as string,
                        },
                        {
                            title: "Laboratoire",
                            value: product?.laboratory as string,
                        },
                    ]}
                />
                {/* Dosages */}
                <DetailsCard
                    heading="Posologies"
                    details={
                        product?.dosage?.map(dosage => ({
                            title: dosage?.ageGroup,
                            value: dosage?.instructions,
                        })) as { title: string; value: string }[]
                    }
                />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails
