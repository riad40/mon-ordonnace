import { View, Text, Image, Pressable } from "react-native"
import simpleCardStyles from "./simpleCardStyles"

const SimpleCard = ({ text, onPress }: { text: string; onPress?: () => void }): JSX.Element => {
    return (
        <Pressable onPress={onPress}>
            <View style={simpleCardStyles.simpleCard}>
                <Text style={simpleCardStyles.simpleCardHeading}>{text}</Text>
                <Image source={require("../../../../assets/images/Chevron-Right.png")} />
            </View>
        </Pressable>
    )
}

export default SimpleCard
