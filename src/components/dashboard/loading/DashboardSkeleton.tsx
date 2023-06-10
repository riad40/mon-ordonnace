import dashboardSkeletonStyles from "./dashboardSkeletonStyles"
import { View } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const DashboardSkeleton = (): JSX.Element => {
    return (
        <SkeletonPlaceholder>
            <>
                <View style={dashboardSkeletonStyles.stateCard} />

                <View style={dashboardSkeletonStyles.wrapper}>
                    <View style={{ ...dashboardSkeletonStyles.stateCard, width: "48%" }} />
                    <View style={{ ...dashboardSkeletonStyles.stateCard, width: "48%" }} />
                </View>

                <View style={dashboardSkeletonStyles.stateCard} />

                <View style={dashboardSkeletonStyles.wrapper}>
                    <View style={{ ...dashboardSkeletonStyles.stateCard, width: "48%" }} />
                    <View style={{ ...dashboardSkeletonStyles.stateCard, width: "48%" }} />
                </View>

                <View style={dashboardSkeletonStyles.stateCard} />
            </>
        </SkeletonPlaceholder>
    )
}

export default DashboardSkeleton
