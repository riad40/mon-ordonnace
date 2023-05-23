import { View, Text, Image, ScrollView, SafeAreaView } from "react-native"
import { NavBar, SimpleCard, DetailsCard } from "../../../components"
import { PatientStackNavProps } from "../../../navigation/stacks/patientStack/@types"
import patientDetailsStyles from "./patientDetailsStyles"
import styles from "../../../assets/styles"

const PatientDetails = ({
    navigation,
}: {
    navigation: PatientStackNavProps<"PatientDetails">["navigation"]
}): JSX.Element => {
    return (
        <SafeAreaView>
            <NavBar navigation={navigation} />
            <ScrollView style={styles.appContainer}>
                <View style={patientDetailsStyles.container}>
                    <Image
                        source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
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
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PatientDetails
