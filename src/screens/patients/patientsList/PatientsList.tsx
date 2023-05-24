import { ScrollView, View, SafeAreaView, FlatList } from "react-native"
import { NavBar, PatientCard, Header, TextButton } from "../../../components"
import { PatientStackNavProps } from "../../../navigation/stacks/patientStack/@types"
import patientsListStyles from "./patientsListStyles"
import patients from "../../../helpers/data/patients"
import styles from "../../../assets/styles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const PatientsList = ({ navigation }: { navigation: PatientStackNavProps<"PatientsList">["navigation"] }) => {
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
                        keyExtractor={item => item.patientId}
                        renderItem={({ item }) => (
                            <PatientCard
                                key={item.patientId}
                                patient={item}
                                onPress={() => navigation.navigate("PatientDetails", { patientId: item.patientId })}
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
