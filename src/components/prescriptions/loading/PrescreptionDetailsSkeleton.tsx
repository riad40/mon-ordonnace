import { View, StyleSheet, Text } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const PrescriptionDetailsSkeleton = () => {
    return (
        <SkeletonPlaceholder highlightColor="#eee" speed={1000}>
            <View style={{ width: "100%" }}>
                <View
                    style={{
                        marginBottom: 20,
                        width: "100%",
                        height: 50,
                        borderRadius: 0,
                    }}
                />
                <View
                    style={{
                        width: "50%",
                        height: 10,
                        borderRadius: 3,
                        marginHorizontal: 20,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "20%",
                        height: 15,
                        borderRadius: 3,
                        marginHorizontal: 20,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "40%",
                        height: 10,
                        borderRadius: 3,
                        marginHorizontal: 40,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "40%",
                        height: 10,
                        borderRadius: 3,
                        marginHorizontal: 40,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "20%",
                        height: 15,
                        borderRadius: 3,
                        marginHorizontal: 20,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "40%",
                        height: 10,
                        borderRadius: 3,
                        marginHorizontal: 40,
                        marginBottom: 20,
                    }}
                />
                <View
                    style={{
                        width: "40%",
                        height: 10,
                        borderRadius: 3,
                        marginHorizontal: 40,
                    }}
                />
            </View>
        </SkeletonPlaceholder>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
})

export default PrescriptionDetailsSkeleton
