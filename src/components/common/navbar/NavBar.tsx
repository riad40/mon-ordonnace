import { View, Text, Image, TouchableOpacity } from "react-native"
import navStyles from "../../../assets/styles/navbar"
import ProfileIcon from "./ProfileIcon"
import { NavigationProp } from "@react-navigation/native"

const NavBar = ({ navigation }: { navigation?: NavigationProp<any> }): JSX.Element => {
    const boldTitle = "MON"
    const lightTitle = "ORDONNANCE"
    return (
        <View style={navStyles.container}>
            {navigation ? (
                <TouchableOpacity style={navStyles.backContainer}>
                    <Image source={require("../../../assets/images/back.png")} />
                    <Text style={navStyles.backText} onPress={() => navigation.goBack()}>
                        retour
                    </Text>
                </TouchableOpacity>
            ) : (
                <Image source={require("../../../assets/images/Headset.png")} />
            )}

            <View style={navStyles.titleContainer}>
                <Text style={navStyles.boldTitle}>{boldTitle}</Text>
                <Text style={navStyles.lightTitle}>{lightTitle}</Text>
            </View>
            <ProfileIcon firstName="John" lastName="Doe" />
        </View>
    )
}

export default NavBar
