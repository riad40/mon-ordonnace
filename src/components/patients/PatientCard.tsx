import { View, Text, Image, StyleSheet } from "react-native"

const PatientCard = ({
    patientName,
    patientAge,
    patientImage,
}: {
    patientName: string
    patientAge: number
    patientImage: any
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={patientImage} style={styles.image} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{patientName}</Text>
                    <Text style={styles.age}>{patientAge} ans</Text>
                </View>
            </View>
            <Image source={require("../../assets/images/More.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
    },
    imageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
        resizeMode: "contain",
    },
    textWrapper: {
        marginLeft: 10,
        justifyContent: "space-between",
        height: 50,
    },
    name: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        color: "#000000",
    },
    age: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        color: "#B9B9B9",
    },
})

export default PatientCard
