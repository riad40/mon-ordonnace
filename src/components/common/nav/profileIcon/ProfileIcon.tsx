import { View, Text, Image } from "react-native"
import profileIconStyles from "./profileIconStyles"

const ProfileIcon = ({ firstName, lastName, avatar }: { firstName: string; lastName: string; avatar?: string }) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`

    return (
        <View
            style={[
                profileIconStyles.container,
                {
                    backgroundColor: avatar ? "transparent" : "#00C389",
                },
            ]}>
            {avatar ? <Image source={{ uri: avatar }} /> : <Text style={profileIconStyles.text}>{initials}</Text>}
        </View>
    )
}

export default ProfileIcon
