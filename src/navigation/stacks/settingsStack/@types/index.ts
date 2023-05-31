import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { User, Clinic } from "../../../../@types"

/** ========================  SETTINGS STACK TYPES  ======================== */

export type SettingsStackParamsList = {
    SettingsList: undefined
    Profile: undefined
    EditProfile: { user: User }
    EditClinic: { clinic: Clinic }
}

export type SettingsStackNavProps<T extends keyof SettingsStackParamsList> = {
    navigation: StackNavigationProp<SettingsStackParamsList, T>
    route: RouteProp<SettingsStackParamsList, T>
}
