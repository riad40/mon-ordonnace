import { View, Text, Image, StyleSheet } from "react-native"
import stateCardStyles from "./stateCardStyles"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { FONT_SIZE_18, FONT_SIZE_22 } from "../../../constants/fontSize"

const StateCard = ({ state, value, image, color }: { state: string; value: string; image?: any; color: string }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            borderRadius: hp("1.5%"),
            padding: 20,
            width: image ? "100%" : "45%",
            marginBottom: hp("2%"),
            height: image ? undefined : hp("18%"),
        },
    })

    return (
        <View style={styles.container}>
            <Text style={[stateCardStyles.text, { fontSize: FONT_SIZE_22 }]}>{value}</Text>
            <View style={stateCardStyles.wrapper}>
                {image && <Image source={image} style={stateCardStyles.image} />}
                <Text style={[stateCardStyles.text, { fontSize: FONT_SIZE_18 }]}>{state}</Text>
            </View>
        </View>
    )
}

export default StateCard
