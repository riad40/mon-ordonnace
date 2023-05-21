import { NavBar, Heading, StateCard } from "../../components"
import { View, ScrollView } from "react-native"
import styles from "../../assets/styles"
import dashboardStyles from "./dashboardStyles"

const Dashboard = (): JSX.Element => {
    return (
        <ScrollView style={styles.container}>
            <NavBar />
            <View style={dashboardStyles.container}>
                <View style={dashboardStyles.headingContainer}>
                    <Heading text="Tableau de bord" />
                </View>
                <StateCard
                    state="Nombre de patients au total"
                    value="6"
                    color="#00C389"
                    image={require("../../assets/images/User.png")}
                />
                <View style={dashboardStyles.wrapper}>
                    <StateCard state="Nombre de patients ce mois" value="6" color="#00C389" />
                    <StateCard state="Nombre de patients cette semaine" value="6" color="#00C389" />
                </View>
                <StateCard
                    state="Nombre d’ordonnances au total"
                    value="2"
                    color="#BA68C8"
                    image={require("../../assets/images/Prescription.png")}
                />
                <View style={dashboardStyles.wrapper}>
                    <StateCard state="Nombre d’ordonnances ce mois" value="6" color="#BA68C8" />
                    <StateCard state="Nombre d’ordonnances cette semaine" value="6" color="#BA68C8" />
                </View>
                <StateCard
                    state="Produits"
                    value="68292"
                    color="#448AFF"
                    image={require("../../assets/images/Pill.png")}
                />
            </View>
        </ScrollView>
    )
}

export default Dashboard
