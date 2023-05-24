import { View, Text, ScrollView, Image, SafeAreaView } from "react-native"
import { NavBar, DetailsCard } from "../../../components"
import { ProductsStackNavProps } from "../../../navigation/stacks/productsStack/@types"
import productDetailsStyles from "./productDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const ProductDetails = ({
    navigation,
}: {
    navigation: ProductsStackNavProps<"ProductDetails">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={productDetailsStyles.container}>
                    <Image
                        source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
                        style={productDetailsStyles.image}
                    />
                    <Text style={productDetailsStyles.name}>DOLIPRANE CO 500MG B20 COMP</Text>
                    <Text style={productDetailsStyles.type}>PARACETAMOL</Text>
                </View>
                {/* General informations */}
                <DetailsCard
                    heading="Informations générales"
                    details={[
                        {
                            title: "Nom du produit",
                            value: "DOLIPRANE CO 500MG B20",
                        },
                        {
                            title: "DCI",
                            value: "PHENOBARBITAL",
                        },
                        {
                            title: "Classe thérapeutique",
                            value: "ANALGESIQUE ANTIPYRETIQUE / VASOCONSTRICTEUR",
                        },
                        {
                            title: "Laboratoire",
                            value: "MAPHAR",
                        },
                    ]}
                />
                {/* Dosages */}
                <DetailsCard
                    heading="Posologies"
                    details={[
                        {
                            title: "Adulte",
                            value: "2 comprimés après repas",
                        },
                        {
                            title: "Enfant",
                            value: "1 comprimé après repas",
                        },
                        {
                            title: "Nourissant",
                            value: "Prendre pendant 2 semaines Après le petit-déjeuner",
                        },
                    ]}
                />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails
