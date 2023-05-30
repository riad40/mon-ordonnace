import { View, Text, ScrollView, SafeAreaView, Linking, Share } from "react-native"
import { NavBar, PrescriptionHeader, WideButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionDetailsStyles from "./prescriptionDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { useEffect } from "react"
import { getPrescriptionById } from "../../../services/prescriptionServices"
import requestExternalStoragePermission from "../../../helpers/externalStoragePermission"
import RNHTMLtoPDF from "react-native-html-to-pdf"
import htmlContent from "../../../helpers/htmlContent"
import { Prescription } from "../../../@types"
import FileViewer from "react-native-file-viewer"

const PrescriptionDetails = ({ navigation, route }: { navigation: PrescreptionsStackNavProps<"PrescriptionDetails">["navigation"]; route: PrescreptionsStackNavProps<"PrescriptionDetails">["route"] }): JSX.Element => {
    const { prescriptionId } = route.params

    const { prescription } = useAppSelector(state => state.prescriptions)

    console.log(prescription)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPrescriptionById(prescriptionId))
    }, [])

    const date = prescription?.createdAt?.split("T")[0]

    const day = date?.split("-")[2]
    const month = date?.split("-")[1]
    const year = date?.split("-")[0]

    const printPrescription = async () => {
        const granted = await requestExternalStoragePermission()

        if (granted) {
            const options = {
                html: htmlContent(prescription as Prescription),
                fileName: "prescription",
                directory: "Documents",
            }

            const file = await RNHTMLtoPDF.convert(options)

            // redirect to the file path
            try {
                const filePath = file.filePath as string
                await FileViewer.open(filePath)
            } catch (error) {
                console.error(error)
            }
        }
    }

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
                                <Text style={prescriptionDetailsStyles.productsDosagesDateRange}>Prendre pendant {product.duration.split(" ")[0]} jours</Text>
                                <Text style={prescriptionDetailsStyles.productsDosagesDosage}>{product.dosage}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <WideButton text="Imprimer" onPress={printPrescription} />
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionDetails
