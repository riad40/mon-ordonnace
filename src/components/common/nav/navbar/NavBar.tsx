import { View, Text, Image, TouchableOpacity } from "react-native"
import navStyles from "./navStyles"
import ProfileIcon from "../profileIcon/ProfileIcon"
import { NavigationProp } from "@react-navigation/native"
import { RootState } from "../../../../state/store"
import { useAppSelector, useAppDispatch } from "../../../../state/hooks"
import { getUserInfos } from "../../../../services"
import { useEffect } from "react"
import API_URL from "../../../../configs/API_URL"

const NavBar = ({ navigation }: { navigation?: NavigationProp<any> }): JSX.Element => {
    const boldTitle = "MON"
    const lightTitle = "ORDONNANCE"

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUserInfos())
    }, [])

    const { user } = useAppSelector((state: RootState) => state.profile)

    const firstName = user?.fullName.split(" ")[0] || "No"
    const lastName = user?.fullName.split(" ")[1] || "Name"

    return (
        <View style={navStyles.container}>
            {navigation ? (
                <TouchableOpacity style={navStyles.backContainer}>
                    <Image source={require("../../../../assets/images/back.png")} />
                    <Text style={navStyles.backText} onPress={() => navigation.goBack()}>
                        retour
                    </Text>
                </TouchableOpacity>
            ) : (
                <Image source={require("../../../../assets/images/Headset.png")} />
            )}

            <View style={navStyles.titleContainer}>
                <Text style={navStyles.boldTitle}>{boldTitle}</Text>
                <Text style={navStyles.lightTitle}>{lightTitle}</Text>
            </View>
            <ProfileIcon firstName={firstName} lastName={lastName} />
        </View>
    )
}

export default NavBar
