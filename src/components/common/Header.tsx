import { View, StyleSheet } from "react-native"
import { Heading, SubHeading, TextButton, SearchInput } from "../index"

const Header = ({
    heading,
    subHeading,
    textButton,
    placeholder,
    onPress,
}: {
    heading: string
    subHeading: string
    textButton: string
    placeholder: string
    onPress?: () => void
}): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <Heading text={heading} />
                    <SubHeading text={subHeading} />
                </View>
                <TextButton text={textButton} onPress={onPress} />
            </View>
            <SearchInput placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default Header
