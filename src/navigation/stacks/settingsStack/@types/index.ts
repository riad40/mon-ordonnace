import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

/** ========================  SETTINGS STACK TYPES  ======================== */

export type SettingsStackParamsList = {
    SettingsList: undefined
    Profile: undefined
    EditProfile: undefined
    EditClinic: undefined
}

export type SettingsStackNavProps<T extends keyof SettingsStackParamsList> = {
    navigation: StackNavigationProp<SettingsStackParamsList, T>
    route: RouteProp<SettingsStackParamsList, T>
}
