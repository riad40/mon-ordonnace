import { ScrollView, View } from "react-native"
import { NavBar, PatientCard } from "../../../components"
import { PatientStackNavProps } from "../../../@types/navigation"
import patientsListStyles from "./patientsListStyles"
import { Header } from "../../../components"
import patients from "../../../helpers/data/patients"

const PatientsList = ({ navigation }: { navigation: PatientStackNavProps<"PatientsList">["navigation"] }) => {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <NavBar />
            <Header
                heading="Patients"
                subHeading="45 300 Patients"
                textButton="+ Ajouter un patient"
                placeholder="Rechercher un patient"
            />
            <View style={patientsListStyles.container}>
                {patients.map(patient => (
                    <PatientCard
                        key={patient.patientId}
                        patientName={patient.name}
                        patientAge={patient.age}
                        patientImage={patient.image}
                        onPress={() => navigation.navigate("PatientDetails", { patientId: patient.patientId })}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default PatientsList
