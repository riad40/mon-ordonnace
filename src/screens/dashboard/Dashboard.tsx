import { NavBar } from "../../components"
import { View, Text } from "react-native"
import styles from "../../assets/styles"

const Dashboard = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <NavBar />
            <Text>Tableau de bord</Text>
        </View>
    )
}

export default Dashboard
