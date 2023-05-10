import { View, Image, StyleSheet } from "react-native"

const TabIcon = ({ focused, icon, iconActive }: { focused: boolean; icon: any; iconActive: any }) => {
    // styles
    const styles = StyleSheet.create({
        container: {
            height: "100%",
            borderTopColor: focused ? "#18B1D4" : "#fff",
            borderTopWidth: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        image: {
            resizeMode: "contain",
        },
    })
    // render
    return (
        <View style={styles.container}>
            <Image source={focused ? iconActive : icon} style={styles.image} />
        </View>
    )
}

export default TabIcon
