import { View, Text, Image, ScrollView, SafeAreaView } from "react-native"
import { NavBar, SimpleCard, DetailsCard, Loading, PatientDetailsSkeleton } from "../../../components"
import { PatientStackNavProps } from "../../../navigation/stacks/patientStack/@types"
import patientDetailsStyles from "./patientDetailsStyles"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../state/hooks"
import { RootState } from "../../../state/store"
import { getPatientById } from "../../../services/patientServices"
import calculateAge from "../../../helpers/calculateAge"

const PatientDetails = ({ navigation, route }: { navigation: PatientStackNavProps<"PatientDetails">["navigation"]; route: PatientStackNavProps<"PatientDetails">["route"] }): JSX.Element => {
    const { patientId } = route.params

    const { patient, loading } = useAppSelector((state: RootState) => state.patients)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPatientById(patientId))
    }, [])

    // if (loading) return <Loading />

    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView style={styles.appContainer}>
                {loading ? (
                    <PatientDetailsSkeleton />
                ) : (
                    <>
                        <View style={patientDetailsStyles.container}>
                            <Image source={{ uri: patient?.avatar }} style={patientDetailsStyles.image} />
                            <Text style={patientDetailsStyles.name}>
                                {patient?.firstName} {patient?.lastName}
                            </Text>
                            <Text style={patientDetailsStyles.type}>6 odonnances</Text>
                        </View>

                        {/* General informations */}
                        <DetailsCard
                            heading="Informations générales"
                            edit={true}
                            details={[
                                {
                                    title: "Nom",
                                    value: patient?.lastName as string,
                                },
                                {
                                    title: "Prénom",
                                    value: patient?.firstName as string,
                                },
                                {
                                    title: "CIN",
                                    value: patient?.cin as string,
                                },
                                {
                                    title: "Date de naissance",
                                    value: ("( " + calculateAge(patient?.dateOfBirth as string) + " ans )" + " " + patient?.dateOfBirth) as string,
                                },
                                {
                                    title: "Téléphone",
                                    value: patient?.phoneNumber as string,
                                },
                                {
                                    title: "Date de création",
                                    value: patient?.createdAt?.split("T")[0] as string,
                                },
                            ]}
                        />

                        <View style={patientDetailsStyles.bottom}>
                            <SimpleCard text="Ordonnances" />
                        </View>
                    </>
                )}
                <View style={{ marginTop: hp("10%") }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatientDetails
