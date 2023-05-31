import { View, Text } from "react-native"
import profileIconStyles from "./profileIconStyles"

const ProfileIcon = ({ firstName, lastName, size }: { firstName: string; lastName: string; size?: { width: string; height: string } }) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`

    return (
        <View style={profileIconStyles.container}>
            <Text style={profileIconStyles.text}>{initials}</Text>
        </View>
    )
}

export default ProfileIcon
