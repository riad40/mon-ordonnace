import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { NavBar, PrescriptionHeader, WideButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionDetailsStyles from "./prescriptionDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { useEffect } from "react"
import { getPrescriptionById } from "../../../services/prescriptionServices"

const PrescriptionDetails = ({
    navigation,
    route,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionDetails">["navigation"]
    route: PrescreptionsStackNavProps<"PrescriptionDetails">["route"]
}): JSX.Element => {
    const { prescriptionId } = route.params

    const { prescription } = useAppSelector(state => state.prescriptions)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPrescriptionById(prescriptionId))
    }, [])

    const date = prescription?.createdAt?.split("T")[0]

    const day = date?.split("-")[2]
    const month = date?.split("-")[1]
    const year = date?.split("-")[0]

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={prescriptionDetailsStyles.container}>
                    <PrescriptionHeader date={`${day}/${month}/${year}`} />
                    <View style={prescriptionDetailsStyles.patientNameWrapper}>
                        <Text style={prescriptionDetailsStyles.patientNameBold}>Nom du patient :</Text>
                        <Text style={prescriptionDetailsStyles.patientName}>{prescription?.patient}</Text>
                    </View>

                    {prescription?.products.map((product, index) => (
                        <View style={prescriptionDetailsStyles.productsWrapper}>
                            <Text style={prescriptionDetailsStyles.productTitle}>{product.name}</Text>
                            <View style={prescriptionDetailsStyles.productsDosagesWrapper}>
                                <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>
                                    Prendre pendant {product.duration.split(" ")[0]} jours
                                </Text>
                                <Text style={prescriptionDetailsStyles.productsDosagesDosage}>{product.dosage}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <WideButton text="Imprimer" />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionDetails
