import { View, Text, StyleSheet } from "react-native"

const ProfileIcon = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FF5A5F",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default ProfileIcon
