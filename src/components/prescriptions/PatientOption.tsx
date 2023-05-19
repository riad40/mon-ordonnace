import { View, Text, Image, StyleSheet } from "react-native"

const PatientOption = ({
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
    const styles = StyleSheet.create({
        optionContainer: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            zIndex: 1,
            borderBottomColor: "#C6C6C6",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
            paddingVertical: 10,
        },
        optionsText: {
            fontFamily: "SourceSansPro-SemiBold",
            fontSize: 14,
            color: "#000000",
            textTransform: noImg ? "uppercase" : "capitalize",
        },
        optionsImage: {
            width: 25,
            height: 25,
            borderRadius: 25,
            resizeMode: "contain",
            marginRight: 10,
        },
    })
    return (
        <View style={[styles.optionContainer, style]}>
            {!noImg && (
                <Image source={require("../../assets/images/patient-picture.png")} style={styles.optionsImage} />
            )}

            <Text style={styles.optionsText}>{patietName}</Text>
        </View>
    )
}

export default PatientOption
