import { View, ScrollView, SafeAreaView } from "react-native"
import { NavBar, Header, PrescriptionCard, TextButton, PrescriptionsListSkeleton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionsListStyles from "./prescriptionsListStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { useEffect, useState, useMemo } from "react"
import { getPrescriptions, getPatients, getProducts } from "../../../services"
import { RootState } from "../../../state/store"

const PrescriptionsList = ({ navigation }: { navigation: PrescreptionsStackNavProps<"PrescriptionsList">["navigation"] }): JSX.Element => {
    const { prescriptions, loading } = useAppSelector((state: RootState) => state.prescriptions)
    const { prescriptionsCount } = useAppSelector((state: RootState) => state.dashboard)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            dispatch(getPrescriptions())
            dispatch(getPatients())
            dispatch(getProducts())
        })

        return unsubscribe
    }, [navigation])

    const [search, setSearch] = useState("")

    const onSearch = (text: string) => {
        setSearch(text)
    }

    const filteredPrescriptions = useMemo(() => {
        return prescriptions.filter(prescription => prescription.patient?.toLowerCase().includes(search.toLowerCase()))
    }, [prescriptions, search])

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <Header
                    heading="Ordonnances"
                    subHeading={`${prescriptionsCount.total} ordonnances`}
                    textButton="+ Nouvelle ordonnance"
                    placeholder="Rechercher une ordonnance"
                    onPress={() => navigation.navigate("AddPrescription")}
                    onChangeText={onSearch}
                />
                {loading ? (
                    <>
                        <PrescriptionsListSkeleton />
                        <PrescriptionsListSkeleton />
                        <PrescriptionsListSkeleton />
                        <PrescriptionsListSkeleton />
                        <PrescriptionsListSkeleton />
                    </>
                ) : (
                    <View style={prescriptionsListStyles.container}>
                        {filteredPrescriptions.map(prescription => (
                            <PrescriptionCard
                                key={prescription._id}
                                prescription={prescription}
                                onPress={() =>
                                    navigation.navigate("PrescriptionDetails", {
                                        prescriptionId: prescription._id,
                                    })
                                }
                            />
                        ))}
                    </View>
                )}
                <View>
                    <TextButton text="+ Nouvelle ordonnance" style={prescriptionsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionsList
