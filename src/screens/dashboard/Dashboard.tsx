import { NavBar, Heading, StateCard, Loading } from "../../components"
import { View, ScrollView, SafeAreaView } from "react-native"
import styles from "../../assets/styles"
import dashboardStyles from "./dashboardStyles"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../state/hooks"
import { getPatientsCount, getPrescriptionsCount, getProductsCount } from "../../services/dashboardServices"
import { RootState } from "../../state/store"

const Dashboard = (): JSX.Element => {
    const { patientsCount, prescriptionsCount, productsCount, loading } = useAppSelector((state: RootState) => state.dashboard)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPatientsCount())
        dispatch(getPrescriptionsCount())
        dispatch(getProductsCount())
    }, [dispatch])

    if (loading) return <Loading />

    return (
        <SafeAreaView>
            <NavBar />
            <ScrollView style={styles.appContainer}>
                <View style={dashboardStyles.container}>
                    <View style={dashboardStyles.headingContainer}>
                        <Heading text="Tableau de bord" />
                    </View>

                    <StateCard state="Nombre de patients au total" value={patientsCount.total.toString()} color="#00C389" image={require("../../assets/images/User.png")} />

                    <View style={dashboardStyles.wrapper}>
                        <StateCard state="Nombre de patients ce mois" value={patientsCount.month.toString()} color="#00C389" />
                        <StateCard state="Nombre de patients cette semaine" value={patientsCount.week.toString()} color="#00C389" />
                    </View>

                    <StateCard state="Nombre d’ordonnances au total" value={prescriptionsCount.total.toString()} color="#BA68C8" image={require("../../assets/images/Prescription.png")} />

                    <View style={dashboardStyles.wrapper}>
                        <StateCard state="Nombre d’ordonnances ce mois" value={prescriptionsCount.month.toString()} color="#BA68C8" />
                        <StateCard state="Nombre d’ordonnances cette semaine" value={prescriptionsCount.week.toString()} color="#BA68C8" />
                    </View>

                    <StateCard state="Produits" value={productsCount.toString()} color="#448AFF" image={require("../../assets/images/Pill.png")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard
