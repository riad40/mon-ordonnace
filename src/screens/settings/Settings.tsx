import { View, Text, Button } from "react-native"
import { NavBar } from "../../components"
import { NavigationProp } from "@react-navigation/native"

const Settings = ({ navigation }: { navigation: NavigationProp<any> }): JSX.Element => {
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
                Settings
            </Text>
            <View
                style={{
                    marginTop: 20,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 20,
                }}>
                <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
                <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
                <Button title="Edit Cabinet" onPress={() => navigation.navigate("EditClinic")} />
                <View
                    style={{
                        width: 20,
                    }}></View>
            </View>
        </View>
    )
}

export default Settings
