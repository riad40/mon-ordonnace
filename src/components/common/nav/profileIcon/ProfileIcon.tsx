import { View, Text, Image } from "react-native"
import profileIconStyles from "./profileIconStyles"

const ProfileIcon = ({ firstName, lastName, avatar, style }: { firstName: string; lastName: string; avatar?: string; style?: object }) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`

    return (
        <View
            style={[
                profileIconStyles.container,
                {
                    backgroundColor: avatar ? "transparent" : "#00C389",
                },
                style,
            ]}>
            {avatar ? (
                <Image
                    source={{
                        uri: avatar,
                    }}
                    style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                />
            ) : (
                <Text style={profileIconStyles.text}>{initials}</Text>
            )}
        </View>
    )
}

export default ProfileIcon
