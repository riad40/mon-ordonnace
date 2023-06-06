import { View, StyleSheet } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const ProductDetailsSkeleton = (): JSX.Element => {
    return (
        <SkeletonPlaceholder highlightColor="#eee">
            <>
                <View
                    style={{
                        backgroundColor: "#fff",
                        alignItems: "center",
                        padding: 20,
                    }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <View style={{ width: 150, height: 150, borderRadius: 10 }} />
                        <View style={{ width: 150, height: 10, borderRadius: 10, marginVertical: 15 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        marginTop: 20,
                        borderTopColor: "#B9B9B9",
                        borderTopWidth: 1,
                        backgroundColor: "#fff",
                        padding: 20,
                        paddingBottom: 0,
                    }}>
                    <View style={{ width: "100%", marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "48%", height: 15, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 15 }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 15 }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 15 }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>
                </View>

                <View
                    style={{
                        width: "100%",
                        marginTop: 20,
                        borderTopColor: "#B9B9B9",
                        borderTopWidth: 1,
                        backgroundColor: "#fff",
                        padding: 20,
                        paddingBottom: 0,
                    }}>
                    <View style={{ width: "100%", marginBottom: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: "48%", height: 15, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 15 }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#eee", borderBottomWidth: 1, paddingVertical: 15 }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>

                    <View style={{ width: "100%", marginVertical: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                        <View style={{ width: 80, height: 10, borderRadius: 5 }} />
                    </View>
                </View>
            </>
        </SkeletonPlaceholder>
    )
}

export default ProductDetailsSkeleton
