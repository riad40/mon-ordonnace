import { Text, View, Button } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { NavBar } from "../../components"

const Patients = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View>
            <NavBar />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#000",
                }}>
                Patients
            </Text>
            <View
                style={{
                    marginTop: 20,
                    width: 200,
                    alignSelf: "center",
                }}>
                <Button title="Go to Patient Details" onPress={() => navigation.navigate("PatientDetails")} />
            </View>
        </View>
    )
}

export default Patients
