import { View, Text } from "react-native"
import profileIconStyles from "./profileIconStyles"

const ProfileIcon = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`

    return (
        <View style={profileIconStyles.container}>
            <Text style={profileIconStyles.text}>{initials}</Text>
        </View>
    )
}

export default ProfileIcon
