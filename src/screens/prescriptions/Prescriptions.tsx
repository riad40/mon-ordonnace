import { View, Text, Button } from "react-native"
import { NavBar } from "../../components"
import { NavigationProp } from "@react-navigation/native"

const Prescriptions = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
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
                Prescriptions
            </Text>
            <View
                style={{
                    marginTop: 20,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 20,
                }}>
                <Button title="Prescription Details" onPress={() => navigation.navigate("PrescriptionDetails")} />
                <Button title="Create Prescription" onPress={() => navigation.navigate("AddPrescription")} />
                <View
                    style={{
                        width: 20,
                    }}></View>
            </View>
        </View>
    )
}

export default Prescriptions
