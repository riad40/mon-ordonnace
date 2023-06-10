import { View } from "react-native"
import { Heading, SubHeading, TextButton, SearchInput } from "../../../index"
import headerStyles from "./headerStyles"

const Header = ({
    heading,
    subHeading,
    textButton,
    placeholder,
    onChangeText,
    onPress,
}: {
    heading: string
    subHeading: string
    textButton: string
    placeholder: string
    onChangeText?: (text: string) => void
    onPress?: () => void
}): JSX.Element => {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.wrapper}>
                <View>
                    <Heading text={heading} />
                    <SubHeading text={subHeading} />
                </View>
                <TextButton text={textButton} onPress={onPress} />
            </View>
            <SearchInput placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    )
}

export default Header
