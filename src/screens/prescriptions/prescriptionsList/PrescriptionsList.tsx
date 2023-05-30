import { View, ScrollView, SafeAreaView, FlatList } from "react-native"
import { NavBar, Header, PrescriptionCard, TextButton } from "../../../components"
import { PrescreptionsStackNavProps } from "../../../navigation/stacks/prescriptionsStack/@types"
import prescriptionsListStyles from "./prescriptionsListStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { useEffect } from "react"
import { getPrescriptions } from "../../../services/prescriptionServices"
import { RootState } from "../../../state/store"

const PrescriptionsList = ({
    navigation,
}: {
    navigation: PrescreptionsStackNavProps<"PrescriptionsList">["navigation"]
}): JSX.Element => {
    const { prescriptions } = useAppSelector((state: RootState) => state.prescriptions)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPrescriptions())
    }, [])

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <Header
                    heading="Ordonnances"
                    subHeading="45 000 ordonnances"
                    textButton="+ Nouvelle ordonnance"
                    placeholder="Rechercher une ordonnance"
                    onPress={() => navigation.navigate("AddPrescription")}
                />
                <View style={prescriptionsListStyles.container}>
                    <FlatList
                        data={prescriptions}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <PrescriptionCard
                                key={item._id}
                                prescription={item}
                                onPress={() =>
                                    navigation.navigate("PrescriptionDetails", {
                                        prescriptionId: item._id,
                                    })
                                }
                            />
                        )}
                    />
                </View>
                <View>
                    <TextButton text="+ Nouvelle ordonnance" style={prescriptionsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrescriptionsList
