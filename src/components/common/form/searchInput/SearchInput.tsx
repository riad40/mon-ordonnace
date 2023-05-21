import { View, Image, TextInput } from "react-native"
import searchInputStyles from "./searchInputStyles"

const SearchInput = ({ placeholder, onChangeText }: { placeholder: string; onChangeText?: (text: string) => void }) => {
    return (
        <View style={searchInputStyles.container}>
            <View style={searchInputStyles.inputContainer}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} style={searchInputStyles.input} />
                {/* <Image source={require("../../../../assets/images/Search.png")} style={searchInputStyles.icon} /> */}
            </View>
        </View>
    )
}

export default SearchInput
