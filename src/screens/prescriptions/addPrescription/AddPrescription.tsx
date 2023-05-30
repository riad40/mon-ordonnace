import { View, ScrollView, TouchableOpacity, Text, SafeAreaView, Alert } from "react-native"
import { NavBar, PrescriptionHeader, SelectOption, CustomContainer, TextButton, WideButton, ProductInputs } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import addPrescriptionStyles from "./addPrescriptionStyles"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { useState, useRef } from "react"
import { getProducts } from "../../../services/productServices"
import { getPatients } from "../../../services/patientServices"
import { createPrescription } from "../../../services/prescriptionServices"
import { Option } from "../../../@types"

const AddPrescription = ({ navigation }: { navigation: PrescreptionsStackNavProps<"AddPrescription">["navigation"] }): JSX.Element => {
    const allProducts = useAppSelector((state: RootState) => state.products)

    const allPatients = useAppSelector((state: RootState) => state.patients)

    const { loading, error } = useAppSelector((state: RootState) => state.prescriptions)

    const submitButtonRef = useRef(null)

    const dispatch = useAppDispatch()

    if (allProducts.products.length === 0) dispatch(getProducts())

    if (allPatients.patients.length === 0) dispatch(getPatients())

    const onlyProductsNames = allProducts.products.map(product => ({
        name: product.name,
        avatar: null,
    }))

    const onlyPatientsNamesAndAvatars = allPatients.patients.map(patient => ({
        name: patient.firstName + " " + patient.lastName,
        avatar: patient.avatar,
    }))

    const [selectedPatient, setSelectedPatient] = useState<Option | undefined>(onlyPatientsNamesAndAvatars && onlyPatientsNamesAndAvatars[0])

    const onSelectedPatient = (option: Option) => {
        setSelectedPatient(option)
    }

    const [productName, setProductName] = useState<string>("")
    const [dosage, setDosage] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [products, setProducts] = useState<{ name: string; dosage: string; duration: string }[]>([])

    const onSelectedProduct = (option: Option) => {
        setProductName(option.name)
    }

    const onDosageChange = (text: string) => {
        setDosage(text)
    }

    const onDurationChange = (text: string) => {
        setDuration(text)
    }

    const onSave = () => {
        // filter the products array to remove empty objects

        console.log({
            patient: selectedPatient,
            products,
        })

        // clear state
        setSelectedPatient(onlyPatientsNamesAndAvatars && onlyPatientsNamesAndAvatars[0])
        setProducts([])

        const data = {
            patient: selectedPatient?.name,
            products,
        }

        // create prescription
        dispatch(createPrescription(data))

        // show success message
        Alert.alert("Success", "Prescription created successfully")

        // navigate to prescriptions screen adter 2 seconds
        setTimeout(() => {
            navigation.navigate("PrescriptionsList")
        }, 2000)
    }

    const addNewProduct = () => {
        if (productName === "" || dosage === "" || duration === "") return Alert.alert("Erreur", "Veuillez remplir tous les champs")

        setProducts([...products, { name: productName, dosage, duration }])

        setProductName("")
        setDosage("")
        setDuration("")
    }

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <View style={addPrescriptionStyles.container}>
                    <PrescriptionHeader date={new Date().toLocaleDateString()} />

                    <View style={addPrescriptionStyles.leftTextButtonWrapper}>
                        <TextButton text="Choisir un modèle" style={{ paddingHorizontal: 0 }} />
                        <Ionicons name="caret-down-outline" size={20} color="#18B1D4" style={{ paddingTop: 2 }} />
                    </View>

                    <View style={addPrescriptionStyles.formWrapper}>
                        {/* Select patient */}
                        <CustomContainer label="Patient" element={<SelectOption data={onlyPatientsNamesAndAvatars} initialValue={onlyPatientsNamesAndAvatars && onlyPatientsNamesAndAvatars[0]} onSelect={onSelectedPatient} />} />

                        <ProductInputs
                            onSelectedProduct={(product: Option) => {
                                onSelectedProduct(product)
                            }}
                            onDosageChange={(dosage: string) => {
                                onDosageChange(dosage)
                            }}
                            onDurationChange={(duration: string) => {
                                onDurationChange(duration)
                            }}
                            dosage={dosage}
                            duration={duration}
                            onlyProductsNames={onlyProductsNames}
                        />
                    </View>

                    <TouchableOpacity style={addPrescriptionStyles.button} onPress={addNewProduct}>
                        <Text style={addPrescriptionStyles.buttonText}>Ajouter un produit</Text>
                    </TouchableOpacity>

                    <TextButton text="+ Rédiger un commentaire" />
                </View>

                <WideButton text="Enregistrer" onPress={onSave} ref={submitButtonRef} />

                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddPrescription
