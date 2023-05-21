import { View, Text, Image } from "react-native"
import optionStyles from "./optionStyles"

const Option = ({
    patietName,
    patientImage,
    style,
    noImg,
}: {
    patietName: string
    patientImage?: any
    style?: object
    noImg?: boolean
}) => {
    return (
        <View style={[optionStyles.optionContainer, style]}>
            {!noImg && (
                <Image
                    source={{ uri: "https://www.w3schools.com/w3images/avatar2.png" }}
                    style={optionStyles.optionsImage}
                />
            )}
            <Text style={optionStyles.optionsText}>{patietName}</Text>
        </View>
    )
}

export default Option
