import { View, Text, Image, TouchableOpacity } from "react-native"
import detailsCardStyles from "./detailsCardStyles"

const DetailsCard = ({
    heading,
    details,
    edit,
    onPress,
}: {
    heading: string
    details: { title: string; value: string }[]
    edit?: boolean
    onPress?: () => void
}): JSX.Element => {
    return (
        <View style={detailsCardStyles.detailsContainer}>
            <View style={detailsCardStyles.detailsWrapper}>
                <Text style={detailsCardStyles.detailsHeading}>{heading}</Text>
                {edit && (
                    <TouchableOpacity style={detailsCardStyles.editButton} onPress={onPress}>
                        <Image source={require("../../../../assets/images/pen.png")} />
                        <Text style={detailsCardStyles.editText}>Modifier</Text>
                    </TouchableOpacity>
                )}
            </View>
            {details.map((detail, index) => (
                <View
                    key={index}
                    style={[
                        detailsCardStyles.details,
                        {
                            borderBottomWidth: index === details.length - 1 ? 0 : 1,
                        },
                    ]}>
                    <Text style={detailsCardStyles.detailsText}>{detail.title}</Text>
                    <Text style={detailsCardStyles.detailsDarkText}>{detail.value}</Text>
                </View>
            ))}
        </View>
    )
}

export default DetailsCard
