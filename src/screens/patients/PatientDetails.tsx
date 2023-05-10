import { View, Text, TouchableOpacity } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { NavBar } from "../../components"

const PatientDetails = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
    return (
        <View>
            <NavBar navigation={navigation} />
            <Text
                style={{
                    textAlign: "center",
                    marginTop: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#000",
                }}>
                Détails du patient
            </Text>
        </View>
    )
}

export default PatientDetails
