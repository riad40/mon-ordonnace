import { View, Image, StyleSheet, TextInput } from "react-native"

const SearchInput = ({ placeholder, onChangeText }: { placeholder: string; onChangeText?: (text: string) => void }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} style={styles.input} />
                <Image source={require("../../assets/images/Search.png")} style={styles.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E6E6E6",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        placeholderTextColor: "#E6E6E6",
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    input: {
        flex: 1,
        fontFamily: "SourceSansPro-Regular",
        fontSize: 16,
        color: "#939393",
    },
})

export default SearchInput
