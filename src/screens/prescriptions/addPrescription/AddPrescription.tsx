import { View, ScrollView, TouchableOpacity, Text, SafeAreaView, Alert } from "react-native"
import {
    NavBar,
    PrescriptionHeader,
    SelectOption,
    CustomContainer,
    TextButton,
    WideButton,
    ProductInputs,
} from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import addPrescriptionStyles from "./addPrescriptionStyles"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { useState } from "react"
import { createPrescription } from "../../../services/prescriptionServices"
import { Option } from "../../../@types"

const AddPrescription = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"AddPrescription">["navigation"]
}): JSX.Element => {
    const allProducts = useAppSelector((state: RootState) => state.products)

    const allPatients = useAppSelector((state: RootState) => state.patients)

    const { error } = useAppSelector((state: RootState) => state.prescriptions)

    const dispatch = useAppDispatch()

    const onlyProductsNames = allProducts.products.map(product => ({
        name: product.name,
        avatar: null,
    }))

    const onlyPatientsNamesAndAvatars = allPatients.patients.map(patient => ({
        name: patient.firstName + " " + patient.lastName,
        avatar: patient.avatar,
    }))

    const [selectedPatient, setSelectedPatient] = useState<Option>(onlyPatientsNamesAndAvatars[0])
    const [selectedProduct, setSelectedProduct] = useState<Option>(onlyProductsNames[0])
    const [dosage, setDosage] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isValid, setIsValid] = useState<boolean>(false)

    const handleProductChange = (item: Option, index: number) => {
        const updatedComponent = { ...productComponent[index] }
        updatedComponent.data.name = item.name
        setProductComponent(prevState => {
            const updatedComponents = [...prevState]
            updatedComponents[index] = updatedComponent
            return updatedComponents
        })
        setSelectedProduct(item)
    }

    const handleDosageChange = (text: string, index: number) => {
        const updatedComponent = { ...productComponent[index] }
        updatedComponent.data.dosage = text
        setProductComponent(prevState => {
            const updatedComponents = [...prevState]
            updatedComponents[index] = updatedComponent
            return updatedComponents
        })
        setDosage(text)
    }

    const handleDurationChange = (text: string, index: number) => {
        const updatedComponent = { ...productComponent[index] }
        updatedComponent.data.duration = text
        setProductComponent(prevState => {
            const updatedComponents = [...prevState]
            updatedComponents[index] = updatedComponent
            return updatedComponents
        })
        setDuration(text)
    }

    const [productComponent, setProductComponent] = useState<any[]>([
        {
            component: (
                <ProductInputs
                    onlyProductsNames={onlyProductsNames}
                    onSelectedProduct={(item: Option) => {
                        handleProductChange(item, 0)
                    }}
                    onDosageChange={(text: string) => {
                        handleDosageChange(text, 0)
                    }}
                    onDurationChange={(text: string) => {
                        handleDurationChange(text, 0)
                    }}
                    index={0}
                />
            ),
            key: 0,
            data: {
                name: selectedProduct.name,
                dosage: dosage,
                duration: duration,
            },
        },
    ])

    const addProduct = () => {
        // validate the inputs
        const inputErrors: Record<string, string> = {}

        // Validate dosage
        if (!dosage) {
            inputErrors.dosage = "Cette valeur est invalide"
        }

        // Validate duration
        if (!duration) {
            inputErrors.duration = "Cette valeur est invalide"
        }

        // Update errors state
        setErrors(inputErrors)

        // set the errors props to the product component
        setProductComponent(prevState => {
            const updatedComponents = [...prevState]
            updatedComponents[productComponent.length - 1].component = (
                <ProductInputs
                    onlyProductsNames={onlyProductsNames}
                    onSelectedProduct={(item: Option) => {
                        handleProductChange(item, productComponent.length - 1)
                    }}
                    onDosageChange={(text: string) => {
                        handleDosageChange(text, productComponent.length - 1)
                    }}
                    onDurationChange={(text: string) => {
                        handleDurationChange(text, productComponent.length - 1)
                    }}
                    index={productComponent.length - 1}
                    errors={inputErrors}
                />
            )
            return updatedComponents
        })

        // If there are any errors, stop the execution
        if (Object.keys(inputErrors).length > 0) return setIsValid(true)

        // generate new component
        const newProductComponent = {
            component: (
                <ProductInputs
                    onlyProductsNames={onlyProductsNames}
                    onSelectedProduct={(item: Option) => {
                        handleProductChange(item, productComponent.length - 1)
                    }}
                    onDosageChange={(text: string) => {
                        handleDosageChange(text, productComponent.length - 1)
                    }}
                    onDurationChange={(text: string) => {
                        handleDurationChange(text, productComponent.length - 1)
                    }}
                    index={productComponent.length - 1}
                />
            ),
            key: productComponent.length,
            data: {
                name: selectedProduct.name,
                dosage: dosage,
                duration: duration,
            },
        }

        // add new component to component list
        setProductComponent([...productComponent, newProductComponent])

        // reset the inputs
        setSelectedProduct(onlyProductsNames[0])
        setDosage("")
        setDuration("")
    }

    const removeProduct = (key: number) => {
        // remove product from component
        const newProductComponent = productComponent.filter(item => item.key !== key)
        setProductComponent(newProductComponent)
    }

    const savePrescription = () => {
        // validate the inputs
        const inputErrors: Record<string, string> = {}

        // Validate dosage
        if (!dosage) {
            inputErrors.dosage = "Cette valeur est invalide"
        }

        // Validate duration
        if (!duration) {
            inputErrors.duration = "Cette valeur est invalide"
        }

        // Update errors state
        setErrors(inputErrors)

        // set the errors props to the product component
        setProductComponent(prevState => {
            const updatedComponents = [...prevState]
            updatedComponents[productComponent.length - 1].component = (
                <ProductInputs
                    onlyProductsNames={onlyProductsNames}
                    onSelectedProduct={(item: Option) => {
                        handleProductChange(item, productComponent.length - 1)
                    }}
                    onDosageChange={(text: string) => {
                        handleDosageChange(text, productComponent.length - 1)
                    }}
                    onDurationChange={(text: string) => {
                        handleDurationChange(text, productComponent.length - 1)
                    }}
                    index={productComponent.length - 1}
                    errors={inputErrors}
                />
            )
            return updatedComponents
        })

        // If there are any errors, stop the execution
        if (Object.keys(inputErrors).length > 0) return setIsValid(true)

        setIsValid(false)
        // retrieve the data from the components
        const products = productComponent.map(item => item.data)

        // create the prescription
        dispatch(
            createPrescription({
                patient: selectedPatient.name,
                products: products,
            }),
        )

        if (error)
            return Alert.alert("Erreur", "Une erreur s'est produite lors de l'ajout de la prescription", [
                {
                    text: "Ok",
                    onPress: () => navigation.navigate("PrescriptionsList"),
                },
            ])

        // navigate to prescriptions screen
        Alert.alert("Succès", "La prescription a été ajoutée avec succès", [
            {
                text: "Ok",
                onPress: () => navigation.navigate("PrescriptionsList"),
            },
        ])
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
                        <CustomContainer
                            label="Patient"
                            element={
                                <SelectOption
                                    data={onlyPatientsNamesAndAvatars}
                                    initialValue={onlyPatientsNamesAndAvatars && onlyPatientsNamesAndAvatars[0]}
                                    onSelect={(item: Option) => setSelectedPatient(item)}
                                />
                            }
                        />
                        {productComponent.map((item, index) =>
                            index === 0 ? (
                                <View key={item.key}>{item.component}</View>
                            ) : (
                                <View key={item.key}>
                                    <View style={addPrescriptionStyles.removeProductButton}>
                                        <View style={addPrescriptionStyles.removeProductButtonTextWrapper}>
                                            <Text style={addPrescriptionStyles.removeProductButtonText}>
                                                Produit N° {index + 1}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => removeProduct(index)}
                                            style={addPrescriptionStyles.removeProductButtonIconWrapper}>
                                            <Ionicons name="close-circle-outline" size={30} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                    {item.component}
                                </View>
                            ),
                        )}
                    </View>

                    <TouchableOpacity style={addPrescriptionStyles.button} onPress={addProduct}>
                        <Text style={addPrescriptionStyles.buttonText}>Ajouter un produit</Text>
                    </TouchableOpacity>
                    <TextButton text="+ Rédiger un commentaire" />
                </View>

                <View style={addPrescriptionStyles.buttonWrapper}>
                    <WideButton text="Enregistrer" onPress={savePrescription} />
                </View>

                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddPrescription
