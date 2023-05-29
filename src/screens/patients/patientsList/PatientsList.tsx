import { ScrollView, View, SafeAreaView, FlatList } from "react-native"
import { NavBar, PatientCard, Header, TextButton } from "../../../components"
import { PatientStackNavProps } from "../../../navigation/stacks/patientStack/@types"
import patientsListStyles from "./patientsListStyles"
import patients from "../../../helpers/data/patients"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { getPatients } from "../../../services/patientServices"

const PatientsList = ({ navigation }: { navigation: PatientStackNavProps<"PatientsList">["navigation"] }) => {
    const { patients, loading } = useAppSelector((state: RootState) => state.patients)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPatients())
    }, [])

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
                <Header
                    heading="Patients"
                    subHeading="45 300 Patients"
                    textButton="+ Ajouter un patient"
                    placeholder="Rechercher un patient"
                />
                <View style={patientsListStyles.container}>
                    <FlatList
                        data={patients}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <PatientCard
                                key={item._id}
                                patient={item}
                                onPress={() => navigation.navigate("PatientDetails", { patientId: item._id })}
                            />
                        )}
                    />
                </View>
                <View>
                    <TextButton text="+ Ajouter un patient" style={patientsListStyles.btnCenter} />
                </View>
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatientsList
