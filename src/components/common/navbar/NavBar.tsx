import { View, Text, Image } from "react-native"
import navStyles from "../../../assets/styles/navbar"
import ProfileIcon from "./ProfileIcon"

const NavBar = (): JSX.Element => {
    const boldTitle = "MON"
    const lightTitle = "ORDONNANCE"
    return (
        <View style={navStyles.container}>
            <Image source={require("../../../assets/images/Headset.png")} />
            <View style={navStyles.titleContainer}>
                <Text style={navStyles.boldTitle}>{boldTitle}</Text>
                <Text style={navStyles.lightTitle}>{lightTitle}</Text>
            </View>
            <ProfileIcon firstName="John" lastName="Doe" />
        </View>
    )
}

export default NavBar
