import { View, Text, Image, StyleSheet, Pressable } from "react-native"

const PatientCard = ({
    patientName,
    patientAge,
    patientImage,
    onPress,
}: {
    patientName: string
    patientAge: number
    patientImage: any
    onPress?: () => void
}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={require("../../assets/images/patient-picture.png")} style={styles.image} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.name}>{patientName}</Text>
                        <Text style={styles.age}>{patientAge} ans</Text>
                    </View>
                </View>
                <Image source={require("../../assets/images/More.png")} />
            </View>
        </Pressable>
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
        paddingTop: 10,
    },
    imageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        resizeMode: "contain",
    },
    textWrapper: {
        marginLeft: 10,
        justifyContent: "space-between",
        height: 45,
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
