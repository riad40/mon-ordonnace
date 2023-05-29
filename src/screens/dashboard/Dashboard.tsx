import { NavBar, Heading, StateCard } from "../../components"
import { View, ScrollView, SafeAreaView, Text } from "react-native"
import styles from "../../assets/styles"
import dashboardStyles from "./dashboardStyles"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../state/hooks"
import { getPatientsCount } from "../../services/dashboardServices"

const Dashboard = (): JSX.Element => {
    const { patientsCount, prescriptionsCount, productsCount, loading } = useAppSelector(state => state.dashboard)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPatientsCount())
        console.log({
            "patients count": patientsCount,
            "prescriptions count": prescriptionsCount,
            "products count": productsCount,
        })
    }, [])

    if (loading)
        return (
            <>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>
                    Loading...
                </Text>
            </>
        )

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView style={styles.appContainer}>
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
        </SafeAreaView>
    )
}

export default Dashboard
