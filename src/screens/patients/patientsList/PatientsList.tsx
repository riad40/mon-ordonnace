import { ScrollView, View } from "react-native"
import { NavBar, PatientCard } from "../../../components"
import { PatientStackNavProps } from "../../../@types/navigation"
import patientsListStyles from "./patientsListStyles"
import { Header } from "../../../components"

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
                <PatientCard
                    patientName="Jean Dupont"
                    patientAge={45}
                    patientImage={require("../../../assets/images/patient-picture.png")}
                />
            </View>
        </ScrollView>
    )
}

export default PatientsList
