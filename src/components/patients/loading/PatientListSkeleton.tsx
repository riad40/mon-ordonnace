import { View, StyleSheet } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const PatientCardSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ width: 50, height: 50, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 10, borderRadius: 4, marginBottom: 12 }} />
                        <View style={{ marginTop: 6, width: 70, height: 10, borderRadius: 4 }} />
                    </View>
                </View>
                <View style={{ width: 5, height: 25, borderRadius: 30 }} />
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
})

export default PatientCardSkeleton
