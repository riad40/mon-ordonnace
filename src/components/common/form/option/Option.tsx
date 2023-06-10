import { View, Text, Image } from "react-native"
import optionStyles from "./optionStyles"
import { Option as OptionType } from "../../../../@types"
import API_URL from "../../../../configs/API_URL"

const Option = ({ data, style }: { data: OptionType; style?: object }) => {
    return (
        <View style={[optionStyles.optionContainer, style]}>
            {data?.avatar && <Image source={{ uri: data.avatar }} style={optionStyles.optionsImage} />}
            <Text style={optionStyles.optionsText}>{data?.name}</Text>
        </View>
    )
}

export default Option
