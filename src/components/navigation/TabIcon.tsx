import { View, Image, StyleSheet } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

const TabIcon = ({ focused, icon, iconActive }: { focused: boolean; icon: any; iconActive: any }) => {
    // styles
    const styles = StyleSheet.create({
        container: {
            height: "100%",
            borderTopColor: focused ? "#18B1D4" : "#fff",
            borderTopWidth: hp("0.7%"),
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
