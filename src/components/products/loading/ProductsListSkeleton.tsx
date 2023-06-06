import { View, StyleSheet } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const ProductsListSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10, borderTopWidth: 2, borderTopColor: "#eee", borderBottomWidth: 2, borderBottomColor: "#eee" }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 50, height: 50, borderRadius: 5 }} />
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ width: 120, height: 10, borderRadius: 4, marginBottom: 12 }} />
                            <View style={{ marginTop: 6, width: 70, height: 10, borderRadius: 4 }} />
                        </View>
                    </View>
                    <View style={{ width: 5, height: 25, borderRadius: 30 }} />
                </View>
                <View style={{ width: 120, height: 10, borderRadius: 4, marginBottom: 12 }} />
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

export default ProductsListSkeleton
