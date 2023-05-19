import { View, Text, Image, ScrollView } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { NavBar, SimpleCard, DetailsCard } from "../../../components"
import patientDetailsStyles from "./patientDetailsStyles"

const PatientDetails = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
    return (
        <ScrollView>
            <NavBar navigation={navigation} />
            <View style={patientDetailsStyles.container}>
                <Image
                    source={require("../../../assets/images/patient-picture.png")}
                    style={patientDetailsStyles.image}
                />
                <Text style={patientDetailsStyles.name}>Khalid Redouani</Text>
                <Text style={patientDetailsStyles.type}>6 odonnances</Text>
            </View>
            {/* General informations */}
            <DetailsCard
                heading="Informations générales"
                edit={true}
                details={[
                    {
                        title: "Nom",
                        value: "Khalid",
                    },
                    {
                        title: "Prénom",
                        value: "Redouani",
                    },
                    {
                        title: "CIN",
                        value: "EE 123456",
                    },
                    {
                        title: "Date de naissance",
                        value: "(49 ans) 01/01/1990",
                    },
                    {
                        title: "Téléphone",
                        value: "06 12 34 56 78",
                    },
                    {
                        title: "Date de création",
                        value: "01/01/2021",
                    },
                ]}
            />
            <View style={patientDetailsStyles.bottom}>
                <SimpleCard text="Ordonnances" />
            </View>
        </ScrollView>
    )
}

export default PatientDetails
